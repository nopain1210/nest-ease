// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryRelationFilter {
  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true, description: undefined })
  is?: Omit<CategoryWhereInput, never> | null;
  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true, description: undefined })
  isNot?: Omit<CategoryWhereInput, never> | null;
}
