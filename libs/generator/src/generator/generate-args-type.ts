import {
  ClassDeclarationStructure,
  ImportDeclarationStructure,
  Project,
  PropertyDeclarationStructure,
  StructureKind,
} from 'ts-morph';
import { SchemaArg } from '../types/dmmf';
import { GeneratorOptions } from '../types/generator';
import { getBaseChildFilePath } from '../helpers/path/get-base-child-file-path';
import { selectInputType } from '../helpers/dmmf/select-input-type';
import { optimizeImports } from '../helpers/import/optimize-imports';
import { generatePrismaType } from './generate-prisma-type';
import { getPropertyDeclaration } from '../helpers/generator/get-property-declaration';
import { GENERATED_FILE_COMMENT } from '../contants/comment.const';

export function generateArgsType(
  project: Project,
  options: GeneratorOptions,
  args: SchemaArg[],
  name: string
) {
  const { srcPath } = options;
  const sourceFilePath = getBaseChildFilePath(srcPath, name, 'args');
  if (project.getSourceFile(sourceFilePath)) {
    return;
  }

  const sourceFile = project.createSourceFile(sourceFilePath, undefined, {
    overwrite: true,
  });
  const imports: ImportDeclarationStructure[] = [
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: '@nestjs/graphql',
      namedImports: ['ArgsType', 'Field'],
    },
  ];
  const properties: PropertyDeclarationStructure[] = [];

  for (const field of args) {
    const { imports: propertyImports, property } = getPropertyDeclaration(
      sourceFilePath,
      options,
      field
    );
    imports.push(...propertyImports);
    properties.push(property);
  }

  const classDeclaration: ClassDeclarationStructure = {
    kind: StructureKind.Class,
    name,
    isExported: true,
    decorators: [
      {
        kind: StructureKind.Decorator,
        name: 'ArgsType',
        arguments: [],
      },
    ],
    properties,
  };
  sourceFile.set({
    kind: StructureKind.SourceFile,
    statements: [
      GENERATED_FILE_COMMENT,
      ...optimizeImports(imports, name),
      classDeclaration,
    ],
  });

  for (const field of args) {
    const { inputTypes } = field;
    const inputType = selectInputType(inputTypes);
    generatePrismaType(project, options, inputType);
  }
}
