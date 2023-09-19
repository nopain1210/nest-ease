// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryUpdateInput } from '../input/category-update.input';
import { Type } from 'class-transformer';
import { CategoryWhereUniqueInput } from '../input/category-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@ArgsType()
export class CategoryUpdateArgs {
  @Type(() => CategoryUpdateInput)
  @Field(() => CategoryUpdateInput, { nullable: false, description: undefined })
  data!: CategoryUpdateInput;
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}