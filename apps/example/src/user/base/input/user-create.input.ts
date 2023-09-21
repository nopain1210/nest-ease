// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserRole } from '../enum/user-role.enum';
import { PostCreateNestedManyWithoutAuthorInput } from '../../../post/base/input/post-create-nested-many-without-author.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutChildrenInput } from './user-create-nested-one-without-children.input';
import { UserCreateNestedManyWithoutParentInput } from './user-create-nested-many-without-parent.input';
import { PostCreateNestedManyWithoutAnotherAuthorInput } from '../../../post/base/input/post-create-nested-many-without-another-author.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false, description: undefined })
  email!: string;
  @Field(() => String, { nullable: true, description: undefined })
  name?: string | null;
  @Field(() => UserRole, { nullable: true, description: undefined })
  role?: keyof typeof UserRole | null;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
  @Field(() => String, { nullable: false, description: undefined })
  mappedField!: string;
  @Type(() => PostCreateNestedManyWithoutAuthorInput)
  @Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true, description: undefined })
  posts?: Omit<PostCreateNestedManyWithoutAuthorInput, never> | null;
  @Type(() => UserCreateNestedOneWithoutChildrenInput)
  @Field(() => UserCreateNestedOneWithoutChildrenInput, { nullable: true, description: undefined })
  parent?: Omit<UserCreateNestedOneWithoutChildrenInput, never> | null;
  @Type(() => UserCreateNestedManyWithoutParentInput)
  @Field(() => UserCreateNestedManyWithoutParentInput, { nullable: true, description: undefined })
  children?: Omit<UserCreateNestedManyWithoutParentInput, never> | null;
  @Type(() => PostCreateNestedManyWithoutAnotherAuthorInput)
  @Field(() => PostCreateNestedManyWithoutAnotherAuthorInput, { nullable: true, description: undefined })
  anotherPosts?: Omit<PostCreateNestedManyWithoutAnotherAuthorInput, never> | null;
}
