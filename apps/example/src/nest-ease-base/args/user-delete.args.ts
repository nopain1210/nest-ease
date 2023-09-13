// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgsType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../input';
import { Type } from 'class-transformer';
import { Prisma } from '../../prisma-client';

@ArgsType()
export class UserDeleteArgs {
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
