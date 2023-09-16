// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { UserCreateWithoutAnotherPostsInput } from './user-create-without-another-posts.input';

@InputType()
export class UserCreateOrConnectWithoutAnotherPostsInput {
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Type(() => UserCreateWithoutAnotherPostsInput)
  @Field(() => UserCreateWithoutAnotherPostsInput, {
    nullable: false,
    description: undefined,
  })
  create!: UserCreateWithoutAnotherPostsInput;
}
