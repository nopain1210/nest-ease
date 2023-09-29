// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';

@InputType()
export class UserCreateOrConnectWithoutPostsInput {
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Type(() => UserCreateWithoutPostsInput)
  @Field(() => UserCreateWithoutPostsInput, {
    nullable: false,
    description: undefined,
  })
  create!: UserCreateWithoutPostsInput;
}
