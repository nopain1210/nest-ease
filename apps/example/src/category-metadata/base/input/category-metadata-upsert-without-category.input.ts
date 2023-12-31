// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryMetadataUpdateWithoutCategoryInput } from './category-metadata-update-without-category.input';
import { Type } from 'class-transformer';
import { CategoryMetadataCreateWithoutCategoryInput } from './category-metadata-create-without-category.input';
import { CategoryMetadataWhereInput } from './category-metadata-where.input';

@InputType()
export class CategoryMetadataUpsertWithoutCategoryInput {
  @Type(() => CategoryMetadataUpdateWithoutCategoryInput)
  @Field(() => CategoryMetadataUpdateWithoutCategoryInput, { nullable: false, description: undefined })
  update!: CategoryMetadataUpdateWithoutCategoryInput;
  @Type(() => CategoryMetadataCreateWithoutCategoryInput)
  @Field(() => CategoryMetadataCreateWithoutCategoryInput, { nullable: false, description: undefined })
  create!: CategoryMetadataCreateWithoutCategoryInput;
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, { nullable: true, description: undefined })
  where?: CategoryMetadataWhereInput | null;
}
