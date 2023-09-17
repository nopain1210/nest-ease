// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '../../../prisma/prisma.service';
import { Category, Post, CategoryMetadata } from '../model';
import {
  CategoryCreateArgs,
  CategoryUpdateArgs,
  CategoryDeleteArgs,
  CategoryDeleteManyArgs,
  CategoryFindUniqueArgs,
  CategoryFindManyArgs,
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

  async deleteMany(args: CategoryDeleteManyArgs): Promise<AffectedRowsOutput> {
    return this.prisma.client.category.deleteMany(args);
  }

  async findUnique(args: CategoryFindUniqueArgs): Promise<Category | null> {
    return this.prisma.client.category.findUnique(args);
  }

  async findMany(args: CategoryFindManyArgs): Promise<Array<Category>> {
    return this.prisma.client.category.findMany(args);
  }

  count(args: CategoryFindManyArgs): Promise<number> {
    return this.prisma.client.category.count(args);
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
