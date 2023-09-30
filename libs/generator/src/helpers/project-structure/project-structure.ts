import {
  IndentationText,
  Project,
  QuoteKind,
  SourceFileStructure,
  StructureKind,
} from 'ts-morph';
import path from 'path';
import { ensureFile, outputFile, readFile, remove } from 'fs-extra';
import { logger, stylize } from '../../utils/logger';
import { GENERATED_WARNING_COMMENT } from '../../contants/comment.const';
import { uniq } from 'ramda';

const IGNORE_START_MARK = `### NestEase Generator Start ###`;
const IGNORE_SECTION_WARNING = `# This section is auto-generated by NestEase Generator. DO NOT EDIT IT MANUALLY!`;
const IGNORE_END_MARK = '### NestEase Generator End ###';
const ignoreRegex = new RegExp(`${IGNORE_START_MARK}.*${IGNORE_END_MARK}`, 's');
const ESLINTIGNORE = '.eslintignore';
const PRETTIERIGNORE = '.prettierignore';

export class ProjectStructure {
  private readonly _projectStructure: Record<string, SourceFileStructure> = {};
  private readonly project: Project;

  constructor(projectSourcePath: string) {
    this.project = new Project({
      tsConfigFilePath: path.resolve(projectSourcePath, 'tsconfig.json'),
      manipulationSettings: {
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
        useTrailingCommas: true,
        quoteKind: QuoteKind.Single,
        indentationText: IndentationText.TwoSpaces,
      },
    });
  }

  getSourceFile(path: string) {
    return this._projectStructure[path];
  }

  isSourceFileExists(path: string) {
    return !!this.getSourceFile(path);
  }

  setSourceFile(path: string, structure: SourceFileStructure) {
    this._projectStructure[path] = structure;
  }

  createSourceFile(path: string, structure?: SourceFileStructure) {
    this._projectStructure[path] = structure || {
      kind: StructureKind.SourceFile,
    };
  }

  async save() {
    logger.info('Removing old auto-generated files and directories...');
    const autoGeneratedPaths = this.getAutoGeneratedPaths();
    for (const autoGeneratedPath of autoGeneratedPaths) {
      await remove(autoGeneratedPath);
    }

    logger.info(
      `Inserting auto-generated paths to ${stylize(
        ESLINTIGNORE,
        'green',
      )} and ${stylize(PRETTIERIGNORE, 'green')}...`,
    );
    await this.insertBaseFilePathsToIgnore(ESLINTIGNORE, autoGeneratedPaths);
    await this.insertBaseFilePathsToIgnore(PRETTIERIGNORE, autoGeneratedPaths);

    logger.info('Saving project...');
    for (const [filePath, structure] of Object.entries(
      this._projectStructure,
    )) {
      this.project.createSourceFile(filePath, structure);
    }
    await this.project.save();
  }

  getAutoGeneratedPaths() {
    return uniq(
      Object.keys(this._projectStructure).map((filePath) =>
        filePath.replace(/\/base\/.+$/, '/base'),
      ),
    ).filter((filePath) => {
      if (filePath.endsWith('/base')) {
        return true;
      }

      const { statements } = this._projectStructure[filePath] || {};
      if (!Array.isArray(statements)) {
        return false;
      }

      const firstStatement = (statements as string[])?.[0];
      if (typeof firstStatement !== 'string') {
        return false;
      }

      return firstStatement === GENERATED_WARNING_COMMENT;
    });
  }

  async insertBaseFilePathsToIgnore(
    filename: string,
    ignoreAbsolutePaths: string[],
  ) {
    const ignoreFilePath = path.resolve(process.cwd(), filename);
    await ensureFile(ignoreFilePath);
    const ignoreRelativePaths = ignoreAbsolutePaths.map((ignoreAbsolutePath) =>
      path.relative(process.cwd(), ignoreAbsolutePath),
    );
    const ignores = `${IGNORE_START_MARK}\n${IGNORE_SECTION_WARNING}\n${ignoreRelativePaths.join(
      '\n',
    )}\n${IGNORE_END_MARK}`;

    const originalContent = await readFile(ignoreFilePath, 'utf-8');

    const content = ignoreRegex.test(originalContent)
      ? originalContent.replace(ignoreRegex, ignores)
      : `${originalContent}\n${ignores}\n`;

    await outputFile(ignoreFilePath, content);
  }
}
