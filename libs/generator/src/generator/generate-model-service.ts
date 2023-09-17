import {
  ClassDeclarationStructure,
  ImportDeclarationStructure,
  Project,
  Scope,
  StructureKind,
} from 'ts-morph';
import { GeneratorOptions } from '../types/generator.type';
import { ModelMapping } from '../types/dmmf.type';
import { getClassname } from '../helpers/path/get-classname';
import { getModuleChildFilePath } from '../helpers/path/get-module-child-file-path';
import { getBaseIndexPath } from '../helpers/path/get-base-index-path';
import { getImportModuleSpecifier } from '../helpers/import/get-import-module-specifier';
import { isPathExists } from '../utils/is-path-exists';
import { assertGitStatusClean } from '../helpers/git/assert-git-status-clean';

export async function generateModelService(
  project: Project,
  generatorOptions: GeneratorOptions,
  modelMapping: ModelMapping
) {
  const { srcPath, overwriteCustomFiles, gitChangedFiles, prismaServicePath } =
    generatorOptions;
  const {
    model: { name: modelName },
  } = modelMapping;

  const classname = getClassname(modelName, 'Service');
  const sourceFilePath = getModuleChildFilePath(
    srcPath,
    modelName,
    classname,
    'Service'
  );
  if (!overwriteCustomFiles && (await isPathExists(sourceFilePath))) {
    return;
  }
  assertGitStatusClean(gitChangedFiles, sourceFilePath);

  const baseServiceClassname = getClassname(modelName, 'BaseService');
  const prismaServiceClassname = getClassname('Prisma', 'Service');
  const baseIndexFilepath = getBaseIndexPath(srcPath);

  const imports: ImportDeclarationStructure[] = [
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: '@nestjs/common',
      namedImports: ['Injectable'],
    },
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: getImportModuleSpecifier(
        sourceFilePath,
        baseIndexFilepath
      ),
      namedImports: [baseServiceClassname],
    },
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: getImportModuleSpecifier(
        sourceFilePath,
        prismaServicePath
      ),
      namedImports: [prismaServiceClassname],
    },
  ];

  const classDeclaration: ClassDeclarationStructure = {
    kind: StructureKind.Class,
    name: classname,
    isExported: true,
    extends: baseServiceClassname,
    decorators: [
      {
        kind: StructureKind.Decorator,
        name: 'Injectable',
        arguments: [],
      },
    ],
    ctors: [
      {
        parameters: [
          {
            name: 'prisma',
            type: prismaServiceClassname,
            isReadonly: true,
            scope: Scope.Protected,
          },
        ],
        statements: ['super(prisma);'],
      },
    ],
  };

  project.createSourceFile(
    sourceFilePath,
    {
      statements: [...imports, classDeclaration],
    },
    {
      overwrite: true,
    }
  );
}
