// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, HideField } from '@nestjs/graphql';
import { UserCreateWithoutChildrenInput } from './user-create-without-children.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChildrenInput } from './user-create-or-connect-without-children.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@InputType()
export class UserCreateNestedOneWithoutChildrenInput {
  @Type(() => UserCreateWithoutChildrenInput)
  @Field(() => UserCreateWithoutChildrenInput, { nullable: true, description: undefined })
  create?: UserCreateWithoutChildrenInput | null;
  @Type(() => UserCreateOrConnectWithoutChildrenInput)
  @HideField()
  connectOrCreate?: UserCreateOrConnectWithoutChildrenInput | null;
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: true, description: undefined })
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
