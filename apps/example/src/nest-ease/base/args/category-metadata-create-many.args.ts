// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryMetadataCreateManyInput } from '../input';
import { Type } from 'class-transformer';

@ArgsType()
export class CategoryMetadataCreateManyArgs {
  @Type(() => CategoryMetadataCreateManyInput)
  @Field(() => [CategoryMetadataCreateManyInput], {
    nullable: false,
    description: undefined,
  })
  data!: Array<CategoryMetadataCreateManyInput>;
  @Field(() => Boolean, { nullable: true, description: undefined })
  skipDuplicates?: boolean | null;
}
