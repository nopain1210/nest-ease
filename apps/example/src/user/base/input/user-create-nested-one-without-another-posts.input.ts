// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, HideField } from '@nestjs/graphql';
import { UserCreateWithoutAnotherPostsInput } from './user-create-without-another-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAnotherPostsInput } from './user-create-or-connect-without-another-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@InputType()
export class UserCreateNestedOneWithoutAnotherPostsInput {
  @Type(() => UserCreateWithoutAnotherPostsInput)
  @Field(() => UserCreateWithoutAnotherPostsInput, { nullable: true, description: undefined })
  create?: UserCreateWithoutAnotherPostsInput | null;
  @Type(() => UserCreateOrConnectWithoutAnotherPostsInput)
  @HideField()
  connectOrCreate?: UserCreateOrConnectWithoutAnotherPostsInput | null;
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: true, description: undefined })
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
