// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutPostsInput {
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, { nullable: false, description: undefined })
  where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
  @Type(() => CategoryUpdateWithoutPostsInput)
  @Field(() => CategoryUpdateWithoutPostsInput, { nullable: false, description: undefined })
  data!: CategoryUpdateWithoutPostsInput;
}
