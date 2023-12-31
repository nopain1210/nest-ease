import {
  ClassDeclarationStructure,
  ImportDeclarationStructure,
  StructureKind,
  WriterFunction,
} from 'ts-morph';
import { GeneratorOptions } from '../types/generator.type';
import { generateModelModule } from './generate-model-module';
import { generateModelBaseService } from './generate-model-base-service';
import { generateModelBaseResolver } from './generate-model-base-resolver';
import { generateModelMappingTypes } from './generate-model-mapping-types';
import { generateModelService } from './generate-model-service';
import { generateModelResolver } from './generate-model-resolver';
import { getImportModuleSpecifier } from '../helpers/import/get-import-module-specifier';
import { GENERATED_WARNING_COMMENT } from '../contants/comment.const';
import { getModuleFileClassName } from '../helpers/path/get-module-file-class-name';
import { getSourceFilePath } from '../helpers/path/get-source-file-path';
import { logger, stylize } from '../utils/logger';
import { ProjectStructure } from '../helpers/project-structure/project-structure';
import { ModelMapping } from '../types/dmmf.type';

export const ROOT_MODULE = 'NestEase';

export async function generateRootModule(
  project: ProjectStructure,
  options: GeneratorOptions,
) {
  const {
    dmmf: { modelMappings },
    srcPath,
  } = options;

  const className = getModuleFileClassName(ROOT_MODULE, 'Module');
  const sourceFilePath = getSourceFilePath(
    srcPath,
    ROOT_MODULE,
    className,
    'Module',
  );
  project.createSourceFile(sourceFilePath);
  await generateModelMappingsTypes(project, options, modelMappings);

  const imports: ImportDeclarationStructure[] = [
    {
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: '@nestjs/common',
      namedImports: ['Module', 'ModuleMetadata'],
    },
  ];

  const modelClassnames = modelMappings
    .map(({ model: { name } }) => getModuleFileClassName(name, 'Module'))
    .join(',\n');

  for (const modelMapping of modelMappings) {
    const {
      model: { name: modelName },
    } = modelMapping;

    const modelModuleClassname = getModuleFileClassName(modelName, 'Module');
    const modelModuleFilepath = getSourceFilePath(
      srcPath,
      modelName,
      modelModuleClassname,
      'Module',
    );

    imports.push({
      kind: StructureKind.ImportDeclaration,
      moduleSpecifier: getImportModuleSpecifier(
        sourceFilePath,
        modelModuleFilepath,
      ),
      namedImports: [modelModuleClassname],
    });
  }

  const modulesVariableDeclarationStructure: WriterFunction = (writer) => {
    writer
      .blankLine()
      .write(`const modules: ModuleMetadata['imports'] = [\n`)
      .indent(() => writer.write(modelClassnames).write(','))
      .write('];');
  };

  const moduleMetadataVariableDeclarationStructure: WriterFunction = (
    writer,
  ) => {
    writer
      .blankLine()
      .write('const metadata: ModuleMetadata = ')
      .inlineBlock(() => {
        writer.writeLine(`imports: modules,`);
        writer.writeLine(`exports: modules,`);
      });
  };

  const classDeclaration: ClassDeclarationStructure = {
    kind: StructureKind.Class,
    name: className,
    isExported: true,
    decorators: [
      {
        kind: StructureKind.Decorator,
        name: 'Module',
        arguments: ['metadata'],
      },
    ],
  };

  project.setSourceFile(sourceFilePath, {
    kind: StructureKind.SourceFile,
    statements: [
      GENERATED_WARNING_COMMENT,
      ...imports,
      modulesVariableDeclarationStructure,
      moduleMetadataVariableDeclarationStructure,
      classDeclaration,
    ],
  });
}

async function generateModelMappingsTypes(
  project: ProjectStructure,
  options: GeneratorOptions,
  modelMappings: ModelMapping[],
) {
  for (const modelMapping of modelMappings) {
    const {
      model: { name: modelName },
    } = modelMapping;
    logger.info(`Generating ${stylize(modelName, 'blue', 'bold')} module...`);

    generateModelMappingTypes(project, options, modelMapping);
    generateModelBaseService(project, options, modelMapping);
    generateModelBaseResolver(project, options, modelMapping);
    await generateModelModule(project, options, modelMapping);
    await generateModelService(project, options, modelMapping);
    await generateModelResolver(project, options, modelMapping);
  }
}
