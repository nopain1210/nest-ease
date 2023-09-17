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

export async function generateModelResolver(
  project: Project,
  generatorOptions: GeneratorOptions,
  modelMapping: ModelMapping
) {
  const { srcPath, overwriteCustomFiles, gitChangedFiles } = generatorOptions;
  const {
    model: { name: modelName },
  } = modelMapping;

  const classname = getClassname(modelName, 'Resolver');
  const sourceFilePath = getModuleChildFilePath(
    srcPath,
    modelName,
    classname,
    'Resolver'
  );
  if (!overwriteCustomFiles && (await isPathExists(sourceFilePath))) {
    return;
  }
  assertGitStatusClean(gitChangedFiles, sourceFilePath);

  const baseResolverClassname = getClassname(modelName, 'BaseResolver');
  const serviceClassname = getClassname(modelName, 'Service');
  const serviceFilepath = getModuleChildFilePath(
    srcPath,
    modelName,
    serviceClassname,
    'Service'
  );
  const baseIndexFilepath = getBaseIndexPath(srcPath);

  const imports: ImportDeclarationStructure[] = [
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: '@nestjs/graphql',
      namedImports: ['Resolver'],
    },
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: getImportModuleSpecifier(
        sourceFilePath,
        baseIndexFilepath
      ),
      namedImports: [baseResolverClassname, modelName],
    },
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: getImportModuleSpecifier(
        sourceFilePath,
        serviceFilepath
      ),
      namedImports: [serviceClassname],
    },
  ];

  const classDeclaration: ClassDeclarationStructure = {
    kind: StructureKind.Class,
    name: classname,
    isExported: true,
    extends: baseResolverClassname,
    decorators: [
      {
        kind: StructureKind.Decorator,
        name: 'Resolver',
        arguments: [`() => ${modelName}`],
      },
    ],
    ctors: [
      {
        parameters: [
          {
            name: 'service',
            type: serviceClassname,
            isReadonly: true,
            scope: Scope.Protected,
          },
        ],
        statements: ['super(service);'],
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
