// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { PrismaService } from '../../prisma/prisma.service';
import { Category } from './model/category.model';
import { CategoryCreateArgs } from './args/category-create.args';
import { CategoryUpdateArgs } from './args/category-update.args';
import { CategoryDeleteArgs } from './args/category-delete.args';
import { CategoryFindUniqueArgs } from './args/category-find-unique.args';
import { CategoryCountArgs } from './args/category-count.args';
import { CategoryFindManyArgs } from './args/category-find-many.args';
import { AffectedRowsOutput } from '../../prisma/base/output/affected-rows.output';
import { CategoryCreateManyArgs } from './args/category-create-many.args';
import { CategoryUpdateManyArgs } from './args/category-update-many.args';
import { CategoryDeleteManyArgs } from './args/category-delete-many.args';
import { PostFindManyArgs } from '../../post/base/args/post-find-many.args';
import { Post } from '../../post/base/model/post.model';
import { CategoryMetadata } from '../../category-metadata/base/model/category-metadata.model';

export class CategoryBaseService {
  constructor(protected readonly prisma: PrismaService) {
  }

  async create(args: CategoryCreateArgs): Promise<Category> {
    return this.prisma.client.category.create(args);
  }

  async update(args: CategoryUpdateArgs): Promise<Category | null> {
    return this.prisma.client.category.update(args);
  }

  async delete(args: CategoryDeleteArgs): Promise<Category | null> {
    return this.prisma.client.category.delete(args);
  }

  async findUnique(args: CategoryFindUniqueArgs): Promise<Category | null> {
    return this.prisma.client.category.findUnique(args);
  }

  async count(args: CategoryCountArgs): Promise<number> {
    return this.prisma.client.category.count(args);
  }

  async findMany(args: CategoryFindManyArgs): Promise<Array<Category>> {
    return this.prisma.client.category.findMany(args);
  }

  async createMany(args: CategoryCreateManyArgs): Promise<AffectedRowsOutput> {
    return this.prisma.client.category.createMany(args);
  }

  async updateMany(args: CategoryUpdateManyArgs): Promise<AffectedRowsOutput> {
    return this.prisma.client.category.updateMany(args);
  }

  async deleteMany(args: CategoryDeleteManyArgs): Promise<AffectedRowsOutput> {
    return this.prisma.client.category.deleteMany(args);
  }

  async resolvePosts(parent: Category, args: PostFindManyArgs): Promise<Array<Post>> {
    return this.prisma.client.category
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .posts(args);
  }

  async resolveMetadata(parent: Category): Promise<CategoryMetadata | null> {
    return this.prisma.client.category
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .metadata();
  }
}
