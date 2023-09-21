// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryMetadataWhereUniqueInput } from './category-metadata-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { CategoryMetadataCreateWithoutCategoryInput } from './category-metadata-create-without-category.input';

@InputType()
export class CategoryMetadataCreateOrConnectWithoutCategoryInput {
  @Type(() => CategoryMetadataWhereUniqueInput)
  @Field(() => CategoryMetadataWhereUniqueInput, { nullable: false, description: undefined })
  where!: Prisma.AtLeast<CategoryMetadataWhereUniqueInput, 'id' | 'categoryId'>;
  @Type(() => CategoryMetadataCreateWithoutCategoryInput)
  @Field(() => CategoryMetadataCreateWithoutCategoryInput, { nullable: false, description: undefined })
  create!: CategoryMetadataCreateWithoutCategoryInput;
}
