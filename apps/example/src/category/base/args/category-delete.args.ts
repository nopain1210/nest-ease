// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from '../input/category-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';

@ArgsType()
export class CategoryDeleteArgs {
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}