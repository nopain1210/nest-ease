// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { PrismaService } from '../../../prisma/prisma.service';
import { Category, Post, CategoryMetadata } from '../model';
import {
  CategoryCreateArgs,
  CategoryUpdateArgs,
  CategoryDeleteArgs,
  CategoryFindUniqueArgs,
  CategoryCountArgs,
  CategoryFindManyArgs,
  CategoryCreateManyArgs,
  CategoryUpdateManyArgs,
  CategoryDeleteManyArgs,
  PostFindManyArgs,
} from '../args';
import { AffectedRowsOutput } from '../output';

export class CategoryBaseService {
  constructor(protected readonly prisma: PrismaService) {}

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

  resolvePosts(parent: Category, args: PostFindManyArgs): Promise<Array<Post>> {
    return this.prisma.client.category
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .posts(args);
  }

  resolveMetadata(parent: Category): Promise<CategoryMetadata | null> {
    return this.prisma.client.category
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .metadata();
  }
}
