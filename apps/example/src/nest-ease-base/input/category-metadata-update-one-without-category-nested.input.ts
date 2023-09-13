// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { CategoryMetadataCreateWithoutCategoryInput } from './category-metadata-create-without-category.input';
import { Type } from 'class-transformer';
import { CategoryMetadataCreateOrConnectWithoutCategoryInput } from './category-metadata-create-or-connect-without-category.input';
import { CategoryMetadataUpsertWithoutCategoryInput } from './category-metadata-upsert-without-category.input';
import { CategoryMetadataWhereInput } from './category-metadata-where.input';
import { CategoryMetadataWhereUniqueInput } from './category-metadata-where-unique.input';
import { Prisma } from '../../prisma-client';
import { CategoryMetadataUpdateToOneWithWhereWithoutCategoryInput } from './category-metadata-update-to-one-with-where-without-category.input';

@InputType()
export class CategoryMetadataUpdateOneWithoutCategoryNestedInput {
  @Type(() => CategoryMetadataCreateWithoutCategoryInput)
  @Field(() => CategoryMetadataCreateWithoutCategoryInput, {
    nullable: true,
    description: undefined,
  })
  create?: CategoryMetadataCreateWithoutCategoryInput;
  @Type(() => CategoryMetadataCreateOrConnectWithoutCategoryInput)
  @Field(() => CategoryMetadataCreateOrConnectWithoutCategoryInput, {
    nullable: true,
    description: undefined,
  })
  connectOrCreate?: CategoryMetadataCreateOrConnectWithoutCategoryInput;
  @Type(() => CategoryMetadataUpsertWithoutCategoryInput)
  @Field(() => CategoryMetadataUpsertWithoutCategoryInput, {
    nullable: true,
    description: undefined,
  })
  upsert?: CategoryMetadataUpsertWithoutCategoryInput;
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, {
    nullable: true,
    description: undefined,
  })
  disconnect?: Omit<CategoryMetadataWhereInput, never>;
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, {
    nullable: true,
    description: undefined,
  })
  delete?: Omit<CategoryMetadataWhereInput, never>;
  @Type(() => CategoryMetadataWhereUniqueInput)
  @Field(() => CategoryMetadataWhereUniqueInput, {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<
    CategoryMetadataWhereUniqueInput,
    'id' | 'categoryId'
  >;
  @Type(() => CategoryMetadataUpdateToOneWithWhereWithoutCategoryInput)
  @Field(() => CategoryMetadataUpdateToOneWithWhereWithoutCategoryInput, {
    nullable: true,
    description: undefined,
  })
  update?: CategoryMetadataUpdateToOneWithWhereWithoutCategoryInput;
}