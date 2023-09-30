// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, HideField } from '@nestjs/graphql';
import { CategoryCreateWithoutMetadataInput } from './category-create-without-metadata.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutMetadataInput } from './category-create-or-connect-without-metadata.input';
import { CategoryUpsertWithoutMetadataInput } from './category-upsert-without-metadata.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Prisma } from '../../../@prisma-client';
import { CategoryUpdateToOneWithWhereWithoutMetadataInput } from './category-update-to-one-with-where-without-metadata.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutMetadataNestedInput {
  @Type(() => CategoryCreateWithoutMetadataInput)
  @Field(() => CategoryCreateWithoutMetadataInput, { nullable: true, description: undefined })
  create?: CategoryCreateWithoutMetadataInput | null;
  @Type(() => CategoryCreateOrConnectWithoutMetadataInput)
  @HideField()
  connectOrCreate?: CategoryCreateOrConnectWithoutMetadataInput | null;
  @Type(() => CategoryUpsertWithoutMetadataInput)
  @HideField()
  upsert?: CategoryUpsertWithoutMetadataInput | null;
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: true, description: undefined })
  connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
  @Type(() => CategoryUpdateToOneWithWhereWithoutMetadataInput)
  @Field(() => CategoryUpdateToOneWithWhereWithoutMetadataInput, { nullable: true, description: undefined })
  update?: CategoryUpdateToOneWithWhereWithoutMetadataInput | null;
}
