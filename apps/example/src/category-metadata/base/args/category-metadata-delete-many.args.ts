// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryMetadataWhereInput } from '../input/category-metadata-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CategoryMetadataDeleteManyArgs {
  @Type(() => CategoryMetadataWhereInput)
  @Field(() => CategoryMetadataWhereInput, {
    nullable: true,
    description: undefined,
  })
  where?: CategoryMetadataWhereInput | null;
}
