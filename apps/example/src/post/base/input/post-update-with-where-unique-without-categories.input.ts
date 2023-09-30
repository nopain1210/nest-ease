// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { PostUpdateWithoutCategoriesInput } from './post-update-without-categories.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoriesInput {
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: false, description: undefined })
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostUpdateWithoutCategoriesInput)
  @Field(() => PostUpdateWithoutCategoriesInput, { nullable: false, description: undefined })
  data!: PostUpdateWithoutCategoriesInput;
}
