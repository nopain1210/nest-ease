// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryCreateManyInput } from '../input/category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CategoryCreateManyArgs {
  @Type(() => CategoryCreateManyInput)
  @Field(() => [CategoryCreateManyInput], {
    nullable: false,
    description: undefined,
  })
  data!: Array<CategoryCreateManyInput>;
  @Field(() => Boolean, { nullable: true, description: undefined })
  skipDuplicates?: boolean | null;
}