// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutCategoriesInput } from './post-create-nested-many-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateWithoutMetadataInput {
  @Field(() => String, { nullable: false, description: undefined })
  name!: string;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string;
  @Type(() => PostCreateNestedManyWithoutCategoriesInput)
  @Field(() => PostCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
    description: undefined,
  })
  posts?: Omit<PostCreateNestedManyWithoutCategoriesInput, never>;
}