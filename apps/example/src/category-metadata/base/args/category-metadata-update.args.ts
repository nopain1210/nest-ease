// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryMetadataUpdateInput } from '../input/category-metadata-update.input';
import { Type } from 'class-transformer';
import { CategoryMetadataWhereUniqueInput } from '../input/category-metadata-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@ArgsType()
export class CategoryMetadataUpdateArgs {
  @Type(() => CategoryMetadataUpdateInput)
  @Field(() => CategoryMetadataUpdateInput, {
    nullable: false,
    description: undefined,
  })
  data!: CategoryMetadataUpdateInput;
  @Type(() => CategoryMetadataWhereUniqueInput)
  @Field(() => CategoryMetadataWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<CategoryMetadataWhereUniqueInput, 'id' | 'categoryId'>;
}
