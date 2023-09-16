// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field, HideField } from '@nestjs/graphql';
import { UserCreateWithoutAnotherPostsInput } from './user-create-without-another-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAnotherPostsInput } from './user-create-or-connect-without-another-posts.input';
import { UserUpsertWithoutAnotherPostsInput } from './user-upsert-without-another-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Prisma } from '../../../@prisma-client';
import { UserUpdateToOneWithWhereWithoutAnotherPostsInput } from './user-update-to-one-with-where-without-another-posts.input';

@InputType()
export class UserUpdateOneRequiredWithoutAnotherPostsNestedInput {
  @Type(() => UserCreateWithoutAnotherPostsInput)
  @Field(() => UserCreateWithoutAnotherPostsInput, {
    nullable: true,
    description: undefined,
  })
  create?: UserCreateWithoutAnotherPostsInput | null;
  @Type(() => UserCreateOrConnectWithoutAnotherPostsInput)
  @HideField()
  connectOrCreate?: UserCreateOrConnectWithoutAnotherPostsInput | null;
  @Type(() => UserUpsertWithoutAnotherPostsInput)
  @HideField()
  upsert?: UserUpsertWithoutAnotherPostsInput | null;
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: true, description: undefined })
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Type(() => UserUpdateToOneWithWhereWithoutAnotherPostsInput)
  @Field(() => UserUpdateToOneWithWhereWithoutAnotherPostsInput, {
    nullable: true,
    description: undefined,
  })
  update?: UserUpdateToOneWithWhereWithoutAnotherPostsInput | null;
}
