// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutAnotherPostsInput } from './user-create-without-another-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAnotherPostsInput } from './user-create-or-connect-without-another-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Prisma } from '../../../prisma-client';

@InputType()
export class UserCreateNestedOneWithoutAnotherPostsInput {
  @Type(() => UserCreateWithoutAnotherPostsInput)
  @Field(() => UserCreateWithoutAnotherPostsInput, {
    nullable: true,
    description: undefined,
  })
  create?: UserCreateWithoutAnotherPostsInput;
  @Type(() => UserCreateOrConnectWithoutAnotherPostsInput)
  @Field(() => UserCreateOrConnectWithoutAnotherPostsInput, {
    nullable: true,
    description: undefined,
  })
  connectOrCreate?: UserCreateOrConnectWithoutAnotherPostsInput;
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: true, description: undefined })
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}