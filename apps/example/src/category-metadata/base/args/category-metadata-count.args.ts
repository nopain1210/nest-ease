// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CategoryMetadataWhereInput } from '../input/category-metadata-where.input';
import { Type } from 'class-transformer';
import { CategoryMetadataOrderByWithRelationInput } from '../input/category-metadata-order-by-with-relation.input';
import { CategoryMetadataWhereUniqueInput } from '../input/category-metadata-where-unique.input';
import { Prisma } from '../../../@prisma-client';
import { CategoryMetadataScalarFieldEnum } from '../enum/category-metadata-scalar-field.enum';

@ArgsType()
export class CategoryMetadataCountArgs {
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, {
    nullable: true,
    description: undefined,
  })
  where?: Omit<CategoryMetadataWhereInput, never> | null;
  @Type(() => CategoryMetadataOrderByWithRelationInput)
  @Field(() => [CategoryMetadataOrderByWithRelationInput], {
    nullable: true,
    description: undefined,
  })
  orderBy?: Array<CategoryMetadataOrderByWithRelationInput> | null;
  @Type(() => CategoryMetadataWhereUniqueInput)
  @Field(() => CategoryMetadataWhereUniqueInput, {
    nullable: true,
    description: undefined,
  })
  cursor?: Prisma.AtLeast<
    CategoryMetadataWhereUniqueInput,
    'id' | 'categoryId'
  >;
  @Field(() => Int, { nullable: true, description: undefined })
  take?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  skip?: number | null;
  @Field(() => [CategoryMetadataScalarFieldEnum], {
    nullable: true,
    description: undefined,
  })
  distinct?: Array<keyof typeof CategoryMetadataScalarFieldEnum> | null;
}