import path from 'path';
import { generateNestEaseModule } from './generator/generate-nest-ease-module';
import { PrismaGeneratorOptions } from './types/generator.type';
import { logError, logger, stylize } from './utils/logger';
import { getGeneratorOptions } from './helpers/generator/get-generator-options';
import { assertSchemaFollowNamingConventions } from './helpers/dmmf/assert-schema-follow-naming-conventions';
import { getPrvPrismaDmmfPath } from './helpers/path/get-prv-prisma-dmmf-path';
import { outputFile } from 'fs-extra';
import { ProjectStructure } from './helpers/project-structure/project-structure';

export async function generate(prismaOptions: PrismaGeneratorOptions) {
  try {
    console.log(stylize('>> NestEase Generator <<', 'cyan', 'bold'));
    assertSchemaFollowNamingConventions(prismaOptions.dmmf);

    logger.info('Getting generator options...');
    const options = await getGeneratorOptions(prismaOptions);
    const { projectRootPath } = options;

    const project = new ProjectStructure(
      path.resolve(projectRootPath, 'tsconfig.json')
    );
    await generateNestEaseModule(project, options);

    logger.info('Formatting and saving project...');
    await project.save();
    const prvPrismaDmmfPath = getPrvPrismaDmmfPath(projectRootPath);
    logger.info(
      `Writing current ${stylize('dmmf', 'blue')} to ${stylize(
        prvPrismaDmmfPath,
        'green'
      )} for speed up next generate...`
    );
    const { dmmf: prismaDmmf } = prismaOptions;
    await outputFile(prvPrismaDmmfPath, JSON.stringify(prismaDmmf));
    logger.success(stylize('NestEase Generator finished!', 'green'));
  } catch (e) {
    logError(e);
    throw e;
  }
}
