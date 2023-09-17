import {
  EnumDeclarationStructure,
  ImportDeclarationStructure,
  Project,
  StructureKind,
} from 'ts-morph';
import { GeneratorOptions } from '../types/generator.type';
import { FieldNamespace } from '../types/dmmf.type';
import { getBaseChildFilePath } from '../helpers/path/get-base-child-file-path';
import { buildEnumDocumentationOptions } from '../helpers/documentation/build-enum-documentation-options';
import { GENERATED_FILE_COMMENT } from '../contants/comment.const';

export function generateEnumType(
  project: Project,
  options: GeneratorOptions,
  namespace: FieldNamespace,
  name: string
) {
  const { dmmf, srcPath } = options;

  const sourceFilePath = getBaseChildFilePath(srcPath, name, 'Enum');
  if (project.getSourceFile(sourceFilePath)) {
    return;
  }
  const sourceFile = project.createSourceFile(sourceFilePath, undefined, {
    overwrite: true,
  });

  const type = dmmf.getNonPrimitiveType('enumTypes', namespace, name);
  if (!type) {
    throw new Error(`Cannot find enum type ${name}`);
  }

  const { values } = type;
  const datamodelEnum = dmmf.getDatamodelType('enums', name);
  const { description, valuesMap } =
    buildEnumDocumentationOptions(datamodelEnum);

  const imports: ImportDeclarationStructure[] = [
    {
      kind: StructureKind.ImportDeclaration,
      namedImports: ['registerEnumType'],
      moduleSpecifier: '@nestjs/graphql',
    },
  ];

  const enumStructure: EnumDeclarationStructure = {
    kind: StructureKind.Enum,
    isExported: true,
    name,
    members: values.map((value) => {
      const comment = valuesMap?.[value]?.description;

      return {
        name: value,
        value,
        docs: comment ? [comment] : [],
      };
    }),
    docs: description ? [description] : [],
  };
  sourceFile.set({
    kind: StructureKind.SourceFile,
    statements: [
      GENERATED_FILE_COMMENT,
      ...imports,
      enumStructure,
      `registerEnumType(${name}, { name: '${name}', description: ${JSON.stringify(
        description
      )}, valuesMap: ${JSON.stringify(valuesMap)} })`,
    ],
  });
}
