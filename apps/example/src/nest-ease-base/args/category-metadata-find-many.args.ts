// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgsType, Field, Int } from '@nestjs/graphql';
import {
  CategoryMetadataWhereInput,
  CategoryMetadataOrderByWithRelationInput,
  CategoryMetadataWhereUniqueInput,
} from '../input';
import { Type } from 'class-transformer';
import { Prisma } from '../../prisma-client';
import { CategoryMetadataScalarFieldEnum } from '../enum';

@ArgsType()
export class CategoryMetadataFindManyArgs {
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, {
    nullable: true,
    description: undefined,
  })
  where?: Omit<CategoryMetadataWhereInput, never>;
  @Type(() => CategoryMetadataOrderByWithRelationInput)
  @Field(() => [CategoryMetadataOrderByWithRelationInput], {
    nullable: true,
    description: undefined,
  })
  orderBy?: Array<CategoryMetadataOrderByWithRelationInput>;
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
  take?: number;
  @Field(() => Int, { nullable: true, description: undefined })
  skip?: number;
  @Field(() => [CategoryMetadataScalarFieldEnum], {
    nullable: true,
    description: undefined,
  })
  distinct?: Array<keyof typeof CategoryMetadataScalarFieldEnum>;
}