// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryMetadataWhereInput } from './category-metadata-where.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryMetadataNullableRelationFilter {
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, { nullable: true, description: undefined })
  is?: CategoryMetadataWhereInput | null;
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, { nullable: true, description: undefined })
  isNot?: CategoryMetadataWhereInput | null;
}
