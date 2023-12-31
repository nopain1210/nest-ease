import { GeneratorOptions } from '../types/generator.type';
import { ModelMapping } from '../types/dmmf.type';
import { generatePrismaType } from './generate-prisma-type';
import { generateArgsType } from './generate-args-type';
import { ProjectStructure } from '../helpers/project-structure/project-structure';

export function generateModelMappingTypes(
  project: ProjectStructure,
  options: GeneratorOptions,
  modelMapping: ModelMapping,
) {
  const { model, operations } = modelMapping;

  for (const operation of operations) {
    const {
      schemaField: { outputType },
    } = operation;
    generatePrismaType(project, options, outputType);
    generateArgsType(project, options, operation, model.name);
  }
}
