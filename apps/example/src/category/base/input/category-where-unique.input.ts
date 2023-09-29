// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, Int } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { DateTimeFilter } from '../../../prisma/base/input/date-time-filter.input';
import { PostListRelationFilter } from '../../../post/base/input/post-list-relation-filter.input';
import { CategoryMetadataNullableRelationFilter } from '../../../category-metadata/base/input/category-metadata-nullable-relation-filter.input';

@InputType()
export class CategoryWhereUniqueInput {
  @Field(() => Int, { nullable: true, description: undefined })
  id?: number | null;
  @Field(() => String, { nullable: true, description: undefined })
  name?: string | null;
  @Type(() => CategoryWhereInput)
  @Field(() => [CategoryWhereInput], { nullable: true, description: undefined })
  AND?: Array<CategoryWhereInput> | null;
  @Type(() => CategoryWhereInput)
  @Field(() => [CategoryWhereInput], { nullable: true, description: undefined })
  OR?: Array<CategoryWhereInput> | null;
  @Type(() => CategoryWhereInput)
  @Field(() => [CategoryWhereInput], { nullable: true, description: undefined })
  NOT?: Array<CategoryWhereInput> | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  createdAt?: DateTimeFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  updatedAt?: DateTimeFilter | null;
  @Type(() => PostListRelationFilter)
  @Field(() => PostListRelationFilter, {
    nullable: true,
    description: undefined,
  })
  posts?: PostListRelationFilter | null;
  @Type(() => CategoryMetadataNullableRelationFilter)
  @Field(() => CategoryMetadataNullableRelationFilter, {
    nullable: true,
    description: undefined,
  })
  metadata?: CategoryMetadataNullableRelationFilter | null;
}
