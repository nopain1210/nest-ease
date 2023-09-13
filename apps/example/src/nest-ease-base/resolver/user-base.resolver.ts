// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserBaseService } from '../service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { User, Post } from '../model';
import {
  UserCreateArgs,
  UserUpdateArgs,
  UserDeleteArgs,
  UserDeleteManyArgs,
  UserFindUniqueArgs,
  UserFindManyArgs,
  PostFindManyArgs,
} from '../args';
import { AffectedRowsOutput } from '../output';

@Resolver(() => User)
export class UserBaseResolver {
  constructor(protected readonly service: UserBaseService) {}

  @Mutation(() => User, { nullable: false })
  async createUser(@Args() args: UserCreateArgs): Promise<User> {
    return this.service.create(args);
  }

  @Mutation(() => User, { nullable: true })
  async updateUser(@Args() args: UserUpdateArgs): Promise<User | null> {
    return this.service.update(args);
  }

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Args() args: UserDeleteArgs): Promise<User | null> {
    return this.service.delete(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async deleteUserList(
    @Args() args: UserDeleteManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.service.deleteMany(args);
  }

  @Query(() => User, { nullable: true })
  async user(@Args() args: UserFindUniqueArgs): Promise<User | null> {
    return this.service.findUnique(args);
  }

  @Query(() => [User], { nullable: false })
  async userList(@Args() args: UserFindManyArgs): Promise<Array<User>> {
    return this.service.findMany(args);
  }

  @ResolveField(() => [Post], { nullable: false })
  posts(
    @Parent() parent: User,
    @Args() args: PostFindManyArgs
  ): Promise<Array<Post>> {
    return this.service.resolvePosts(parent, args);
  }

  @ResolveField(() => User, { nullable: true })
  parent(@Parent() parent: User): Promise<User | null> {
    return this.service.resolveParent(parent);
  }

  @ResolveField(() => [User], { nullable: false })
  children(
    @Parent() parent: User,
    @Args() args: UserFindManyArgs
  ): Promise<Array<User>> {
    return this.service.resolveChildren(parent, args);
  }

  @ResolveField(() => [Post], { nullable: false })
  anotherPosts(
    @Parent() parent: User,
    @Args() args: PostFindManyArgs
  ): Promise<Array<Post>> {
    return this.service.resolveAnotherPosts(parent, args);
  }

  @Query(() => Number)
  userCount(@Args() args: UserFindManyArgs): Promise<number> {
    return this.service.count(args);
  }
}
