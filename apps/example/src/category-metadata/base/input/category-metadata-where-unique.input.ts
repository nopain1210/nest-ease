// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field, Int } from '@nestjs/graphql';
import { CategoryMetadataWhereInput } from './category-metadata-where.input';
import { Type } from 'class-transformer';
import { DateTimeFilter } from '../../../prisma/base/input/date-time-filter.input';
import { JsonNullableListFilter } from '../../../prisma/base/input/json-nullable-list-filter.input';
import { CategoryRelationFilter } from '../../../category/base/input/category-relation-filter.input';

@InputType()
export class CategoryMetadataWhereUniqueInput {
  @Field(() => Int, { nullable: true, description: undefined })
  id?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  categoryId?: number | null;
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => [CategoryMetadataWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: Array<CategoryMetadataWhereInput> | null;
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => [CategoryMetadataWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: Array<CategoryMetadataWhereInput> | null;
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => [CategoryMetadataWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: Array<CategoryMetadataWhereInput> | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  createdAt?: DateTimeFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  updatedAt?: DateTimeFilter | null;
  @Type(() => JsonNullableListFilter)
  @Field(() => JsonNullableListFilter, {
    nullable: true,
    description: undefined,
  })
  metadata?: JsonNullableListFilter | null;
  @Type(() => CategoryRelationFilter)
  @Field(() => CategoryRelationFilter, {
    nullable: true,
    description: undefined,
  })
  category?: CategoryRelationFilter | null;
}
