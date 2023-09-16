// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field, HideField } from '@nestjs/graphql';
import { UserCreateWithoutParentInput } from './user-create-without-parent.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutParentInput } from './user-create-or-connect-without-parent.input';
import { UserCreateManyParentInputEnvelope } from './user-create-many-parent-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@InputType()
export class UserCreateNestedManyWithoutParentInput {
  @Type(() => UserCreateWithoutParentInput)
  @Field(() => [UserCreateWithoutParentInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<UserCreateWithoutParentInput> | null;
  @Type(() => UserCreateOrConnectWithoutParentInput)
  @HideField()
  connectOrCreate?: Array<UserCreateOrConnectWithoutParentInput> | null;
  @Type(() => UserCreateManyParentInputEnvelope)
  @HideField()
  createMany?: UserCreateManyParentInputEnvelope | null;
  @Type(() => UserWhereUniqueInput)
  @Field(() => [UserWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
