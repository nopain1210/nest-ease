// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { UserCreateWithoutParentInput } from './user-create-without-parent.input';

@InputType()
export class UserCreateOrConnectWithoutParentInput {
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false, description: undefined })
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Type(() => UserCreateWithoutParentInput)
  @Field(() => UserCreateWithoutParentInput, { nullable: false, description: undefined })
  create!: UserCreateWithoutParentInput;
}
