// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from '../input';
import { Type } from 'class-transformer';
import { Prisma } from '../../prisma-client';

@ArgsType()
export class CategoryDeleteArgs {
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}