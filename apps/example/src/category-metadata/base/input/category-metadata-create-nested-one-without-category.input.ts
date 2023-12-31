// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, HideField } from '@nestjs/graphql';
import { CategoryMetadataCreateWithoutCategoryInput } from './category-metadata-create-without-category.input';
import { Type } from 'class-transformer';
import { CategoryMetadataCreateOrConnectWithoutCategoryInput } from './category-metadata-create-or-connect-without-category.input';
import { CategoryMetadataWhereUniqueInput } from './category-metadata-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@InputType()
export class CategoryMetadataCreateNestedOneWithoutCategoryInput {
  @Type(() => CategoryMetadataCreateWithoutCategoryInput)
  @Field(() => CategoryMetadataCreateWithoutCategoryInput, { nullable: true, description: undefined })
  create?: CategoryMetadataCreateWithoutCategoryInput | null;
  @Type(() => CategoryMetadataCreateOrConnectWithoutCategoryInput)
  @HideField()
  connectOrCreate?: CategoryMetadataCreateOrConnectWithoutCategoryInput | null;
  @Type(() => CategoryMetadataWhereUniqueInput)
  @Field(() => CategoryMetadataWhereUniqueInput, { nullable: true, description: undefined })
  connect?: Prisma.AtLeast<CategoryMetadataWhereUniqueInput, 'id' | 'categoryId'>;
}
