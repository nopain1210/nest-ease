// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { UserRole } from '../enum';
import { UserCreateNestedOneWithoutChildrenInput } from './user-create-nested-one-without-children.input';
import { Type } from 'class-transformer';
import { UserCreateNestedManyWithoutParentInput } from './user-create-nested-many-without-parent.input';
import { PostCreateNestedManyWithoutAnotherAuthorInput } from './post-create-nested-many-without-another-author.input';

@InputType()
export class UserCreateWithoutPostsInput {
  @Field(() => String, { nullable: false, description: undefined })
  email!: string;
  @Field(() => String, { nullable: true, description: undefined })
  name?: string;
  @Field(() => UserRole, { nullable: true, description: undefined })
  role?: keyof typeof UserRole;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string;
  @Field(() => String, { nullable: false, description: undefined })
  toMapField!: string;
  @Type(() => UserCreateNestedOneWithoutChildrenInput)
  @Field(() => UserCreateNestedOneWithoutChildrenInput, {
    nullable: true,
    description: undefined,
  })
  parent?: Omit<UserCreateNestedOneWithoutChildrenInput, never>;
  @Type(() => UserCreateNestedManyWithoutParentInput)
  @Field(() => UserCreateNestedManyWithoutParentInput, {
    nullable: true,
    description: undefined,
  })
  children?: Omit<UserCreateNestedManyWithoutParentInput, never>;
  @Type(() => PostCreateNestedManyWithoutAnotherAuthorInput)
  @Field(() => PostCreateNestedManyWithoutAnotherAuthorInput, {
    nullable: true,
    description: undefined,
  })
  anotherPosts?: Omit<PostCreateNestedManyWithoutAnotherAuthorInput, never>;
}
