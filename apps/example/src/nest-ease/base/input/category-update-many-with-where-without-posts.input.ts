// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryScalarWhereInput } from './category-scalar-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateManyMutationInput } from './category-update-many-mutation.input';

@InputType()
export class CategoryUpdateManyWithWhereWithoutPostsInput {
  @Type(() => CategoryScalarWhereInput)
  @Field(() => CategoryScalarWhereInput, {
    nullable: false,
    description: undefined,
  })
  where!: Omit<CategoryScalarWhereInput, never>;
  @Type(() => CategoryUpdateManyMutationInput)
  @Field(() => CategoryUpdateManyMutationInput, {
    nullable: false,
    description: undefined,
  })
  data!: CategoryUpdateManyMutationInput;
}
