// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { PostBaseService } from './post-base.service';
import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
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

@Resolver(() => Post)
export class PostBaseResolver {
  constructor(protected readonly service: PostBaseService) {
  }

  @Mutation(() => Post, { nullable: false })
  async createPost(@Args() args: PostCreateArgs): Promise<Post> {
    return this.service.create(args);
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(@Args() args: PostUpdateArgs): Promise<Post | null> {
    return this.service.update(args);
  }

  @Mutation(() => Post, { nullable: true })
  async deletePost(@Args() args: PostDeleteArgs): Promise<Post | null> {
    return this.service.delete(args);
  }

  @Query(() => Post, { nullable: true })
  async post(@Args() args: PostFindUniqueArgs): Promise<Post | null> {
    return this.service.findUnique(args);
  }

  @Query(() => Int, { nullable: false })
  async postCount(@Args() args: PostCountArgs): Promise<number> {
    return this.service.count(args);
  }

  @Query(() => [Post], { nullable: false })
  async postList(@Args() args: PostFindManyArgs): Promise<Array<Post>> {
    return this.service.findMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async createPostList(@Args() args: PostCreateManyArgs): Promise<AffectedRowsOutput> {
    return this.service.createMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async updatePostList(@Args() args: PostUpdateManyArgs): Promise<AffectedRowsOutput> {
    return this.service.updateMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async deletePostList(@Args() args: PostDeleteManyArgs): Promise<AffectedRowsOutput> {
    return this.service.deleteMany(args);
  }

  @ResolveField(() => User, { nullable: false })
  author(@Parent() parent: Post): Promise<User> {

    return this.service.resolveAuthor(parent);
            
  }

  @ResolveField(() => User, { nullable: false })
  anotherAuthor(@Parent() parent: Post): Promise<User> {

    return this.service.resolveAnotherAuthor(parent);
            
  }

  @ResolveField(() => [Category], { nullable: false })
  categories(@Parent() parent: Post, @Args() args: CategoryFindManyArgs): Promise<Array<Category>> {

    return this.service.resolveCategories(parent, args);
            
  }
}
