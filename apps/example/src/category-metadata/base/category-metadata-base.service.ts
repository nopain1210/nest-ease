// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { PrismaService } from '../../prisma/prisma.service';
import { CategoryMetadata } from './model/category-metadata.model';
import { CategoryMetadataCreateArgs } from './args/category-metadata-create.args';
import { CategoryMetadataUpdateArgs } from './args/category-metadata-update.args';
import { CategoryMetadataDeleteArgs } from './args/category-metadata-delete.args';
import { CategoryMetadataFindUniqueArgs } from './args/category-metadata-find-unique.args';
import { CategoryMetadataCountArgs } from './args/category-metadata-count.args';
import { CategoryMetadataFindManyArgs } from './args/category-metadata-find-many.args';
import { AffectedRowsOutput } from '../../prisma/base/output/affected-rows.output';
import { CategoryMetadataCreateManyArgs } from './args/category-metadata-create-many.args';
import { CategoryMetadataUpdateManyArgs } from './args/category-metadata-update-many.args';
import { CategoryMetadataDeleteManyArgs } from './args/category-metadata-delete-many.args';
import { Category } from '../../category/base/model/category.model';

export class CategoryMetadataBaseService {
  constructor(protected readonly prisma: PrismaService) {}

  async create(args: CategoryMetadataCreateArgs): Promise<CategoryMetadata> {
    return this.prisma.client.categoryMetadata.create(args);
  }

  async update(
    args: CategoryMetadataUpdateArgs
  ): Promise<CategoryMetadata | null> {
    return this.prisma.client.categoryMetadata.update(args);
  }

  async delete(
    args: CategoryMetadataDeleteArgs
  ): Promise<CategoryMetadata | null> {
    return this.prisma.client.categoryMetadata.delete(args);
  }

  async findUnique(
    args: CategoryMetadataFindUniqueArgs
  ): Promise<CategoryMetadata | null> {
    return this.prisma.client.categoryMetadata.findUnique(args);
  }

  async count(args: CategoryMetadataCountArgs): Promise<number> {
    return this.prisma.client.categoryMetadata.count(args);
  }

  async findMany(
    args: CategoryMetadataFindManyArgs
  ): Promise<Array<CategoryMetadata>> {
    return this.prisma.client.categoryMetadata.findMany(args);
  }

  async createMany(
    args: CategoryMetadataCreateManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.prisma.client.categoryMetadata.createMany(args);
  }

  async updateMany(
    args: CategoryMetadataUpdateManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.prisma.client.categoryMetadata.updateMany(args);
  }

  async deleteMany(
    args: CategoryMetadataDeleteManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.prisma.client.categoryMetadata.deleteMany(args);
  }

  resolveCategory(parent: CategoryMetadata): Promise<Category> {
    return this.prisma.client.categoryMetadata
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .category();
  }
}