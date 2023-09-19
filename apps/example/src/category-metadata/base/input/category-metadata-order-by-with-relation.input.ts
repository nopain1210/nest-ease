// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../../../prisma/base/enum/sort-order.enum';
import { CategoryOrderByWithRelationInput } from '../../../category/base/input/category-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryMetadataOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true, description: undefined })
  id?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  categoryId?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  createdAt?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  updatedAt?: keyof typeof SortOrder | null;
  @Type(() => CategoryOrderByWithRelationInput)
  @Field(() => CategoryOrderByWithRelationInput, {
    nullable: true,
    description: undefined,
  })
  category?: Omit<CategoryOrderByWithRelationInput, never> | null;
}