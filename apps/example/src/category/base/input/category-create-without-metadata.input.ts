// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutCategoriesInput } from '../../../post/base/input/post-create-nested-many-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateWithoutMetadataInput {
  @Field(() => String, { nullable: false, description: undefined })
  name!: string;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
  @Type(() => PostCreateNestedManyWithoutCategoriesInput)
  @Field(() => PostCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
    description: undefined,
  })
  posts?: Omit<PostCreateNestedManyWithoutCategoriesInput, never> | null;
}
