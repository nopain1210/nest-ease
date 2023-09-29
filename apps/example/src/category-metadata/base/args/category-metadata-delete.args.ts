// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryMetadataWhereUniqueInput } from '../input/category-metadata-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';

@ArgsType()
export class CategoryMetadataDeleteArgs {
  @Type(() => CategoryMetadataWhereUniqueInput)
  @Field(() => CategoryMetadataWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<CategoryMetadataWhereUniqueInput, 'id' | 'categoryId'>;
}
