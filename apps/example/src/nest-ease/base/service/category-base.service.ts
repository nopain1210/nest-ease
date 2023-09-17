// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '../../../prisma/prisma.service';
import { Prisma } from '../../../@prisma-client';
import { Category, Post, CategoryMetadata } from '../model';
import { AffectedRowsOutput } from '../output';

export class CategoryBaseService {
  constructor(protected readonly prisma: PrismaService) {}

  async create(args: Prisma.CategoryCreateArgs): Promise<Category> {
    return this.prisma.client.category.create(args);
  }

  async update(args: Prisma.CategoryUpdateArgs): Promise<Category | null> {
    return this.prisma.client.category.update(args);
  }

  async delete(args: Prisma.CategoryDeleteArgs): Promise<Category | null> {
    return this.prisma.client.category.delete(args);
  }

  async deleteMany(
    args: Prisma.CategoryDeleteManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.prisma.client.category.deleteMany(args);
  }

  async findUnique(
    args: Prisma.CategoryFindUniqueArgs
  ): Promise<Category | null> {
    return this.prisma.client.category.findUnique(args);
  }

  async findMany(args: Prisma.CategoryFindManyArgs): Promise<Array<Category>> {
    return this.prisma.client.category.findMany(args);
  }

  count(args: Prisma.CategoryCountArgs): Promise<number> {
    return this.prisma.client.category.count(args);
  }

  resolvePosts(
    parent: Category,
    args: Prisma.PostFindManyArgs
  ): Promise<Array<Post>> {
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
