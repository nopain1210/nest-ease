// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryRelationFilter {
  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true, description: undefined })
  is?: CategoryWhereInput | null;
  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true, description: undefined })
  isNot?: CategoryWhereInput | null;
}
