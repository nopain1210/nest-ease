// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { PrismaService } from '../../prisma/prisma.service';
import { Post } from './model/post.model';
import { PostCreateArgs } from './args/post-create.args';
import { PostUpdateArgs } from './args/post-update.args';
import { PostDeleteArgs } from './args/post-delete.args';
import { PostFindUniqueArgs } from './args/post-find-unique.args';
import { PostCountArgs } from './args/post-count.args';
import { PostFindManyArgs } from './args/post-find-many.args';
import { AffectedRowsOutput } from '../../prisma/base/output/affected-rows.output';
import { PostCreateManyArgs } from './args/post-create-many.args';
import { PostUpdateManyArgs } from './args/post-update-many.args';
import { PostDeleteManyArgs } from './args/post-delete-many.args';
import { User } from '../../user/base/model/user.model';
import { CategoryFindManyArgs } from '../../category/base/args/category-find-many.args';
import { Category } from '../../category/base/model/category.model';

export class PostBaseService {
  constructor(protected readonly prisma: PrismaService) {}

  async create(args: PostCreateArgs): Promise<Post> {
    return this.prisma.client.post.create(args);
  }

  async update(args: PostUpdateArgs): Promise<Post | null> {
    return this.prisma.client.post.update(args);
  }

  async delete(args: PostDeleteArgs): Promise<Post | null> {
    return this.prisma.client.post.delete(args);
  }

  async findUnique(args: PostFindUniqueArgs): Promise<Post | null> {
    return this.prisma.client.post.findUnique(args);
  }

  async count(args: PostCountArgs): Promise<number> {
    return this.prisma.client.post.count(args);
  }

  async findMany(args: PostFindManyArgs): Promise<Array<Post>> {
    return this.prisma.client.post.findMany(args);
  }

  async createMany(args: PostCreateManyArgs): Promise<AffectedRowsOutput> {
    return this.prisma.client.post.createMany(args);
  }

  async updateMany(args: PostUpdateManyArgs): Promise<AffectedRowsOutput> {
    return this.prisma.client.post.updateMany(args);
  }

  async deleteMany(args: PostDeleteManyArgs): Promise<AffectedRowsOutput> {
    return this.prisma.client.post.deleteMany(args);
  }

  async resolveAuthor(parent: Post): Promise<User> {
    return this.prisma.client.post
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .author();
  }

  async resolveAnotherAuthor(parent: Post): Promise<User> {
    return this.prisma.client.post
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .anotherAuthor();
  }

  async resolveCategories(
    parent: Post,
    args: CategoryFindManyArgs,
  ): Promise<Array<Category>> {
    return this.prisma.client.post
      .findUniqueOrThrow({
        where: {
          id: parent.id,
        },
      })
      .categories(args);
  }
}
