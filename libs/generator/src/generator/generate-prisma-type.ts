import { InputTypeRef, OutputTypeRef } from '../types/dmmf.type';
import { generateOutputType } from './generate-output-type';
import { Project } from 'ts-morph';
import { GeneratorOptions } from '../types/generator.type';
import { generateEnumType } from './generate-enum-type';
import { generateInputObjectType } from './generate-input-object-type';

export function generatePrismaType(
  project: Project,
  options: GeneratorOptions,
  ref: OutputTypeRef | InputTypeRef
) {
  const { location, namespace, type } = ref;
  if (location === 'scalar' || location === 'fieldRefTypes') {
    return;
  }

  if (!namespace) {
    throw new Error(`Namespace is required ${location}:${namespace}:${type}`);
  }

  if (location === 'outputObjectTypes') {
    return generateOutputType(project, options, namespace, type);
  }

  if (location === 'enumTypes') {
    return generateEnumType(project, options, namespace, type);
  }

  if (location === 'inputObjectTypes') {
    return generateInputObjectType(project, options, namespace, type);
  }
}
