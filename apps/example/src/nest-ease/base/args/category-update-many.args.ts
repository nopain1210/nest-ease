// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryUpdateManyMutationInput, CategoryWhereInput } from '../input';
import { Type } from 'class-transformer';

@ArgsType()
export class CategoryUpdateManyArgs {
  @Type(() => CategoryUpdateManyMutationInput)
  @Field(() => CategoryUpdateManyMutationInput, {
    nullable: false,
    description: undefined,
  })
  data!: CategoryUpdateManyMutationInput;
  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true, description: undefined })
  where?: Omit<CategoryWhereInput, never> | null;
}
