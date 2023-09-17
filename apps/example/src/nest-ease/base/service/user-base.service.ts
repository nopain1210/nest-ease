// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '../../../prisma/prisma.service';
import { Prisma } from '../../../@prisma-client';
import { User, Post } from '../model';
import { AffectedRowsOutput } from '../output';

export class UserBaseService {
  constructor(protected readonly prisma: PrismaService) {}

  async create(args: Prisma.UserCreateArgs): Promise<User> {
    return this.prisma.client.user.create(args);
  }

  async update(args: Prisma.UserUpdateArgs): Promise<User | null> {
    return this.prisma.client.user.update(args);
  }

  async delete(args: Prisma.UserDeleteArgs): Promise<User | null> {
    return this.prisma.client.user.delete(args);
  }

  async deleteMany(
    args: Prisma.UserDeleteManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.prisma.client.user.deleteMany(args);
  }

  async findUnique(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prisma.client.user.findUnique(args);
  }

  async findMany(args: Prisma.UserFindManyArgs): Promise<Array<User>> {
    return this.prisma.client.user.findMany(args);
  }

  count(args: Prisma.UserCountArgs): Promise<number> {
    return this.prisma.client.user.count(args);
  }

  resolvePosts(
    parent: User,
    args: Prisma.PostFindManyArgs
  ): Promise<Array<Post>> {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .posts(args);
  }

  resolveParent(parent: User): Promise<User | null> {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .parent();
  }

  resolveChildren(
    parent: User,
    args: Prisma.UserFindManyArgs
  ): Promise<Array<User>> {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .children(args);
  }

  resolveAnotherPosts(
    parent: User,
    args: Prisma.PostFindManyArgs
  ): Promise<Array<Post>> {
    return this.prisma.client.user
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .anotherPosts(args);
  }
}
