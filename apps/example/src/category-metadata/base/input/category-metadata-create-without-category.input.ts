// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryMetadataCreatemetadataInput } from './category-metadata-createmetadata.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryMetadataCreateWithoutCategoryInput {
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
  @Type(() => CategoryMetadataCreatemetadataInput)
  @Field(() => CategoryMetadataCreatemetadataInput, { nullable: true, description: undefined })
  metadata?: CategoryMetadataCreatemetadataInput | null;
}
