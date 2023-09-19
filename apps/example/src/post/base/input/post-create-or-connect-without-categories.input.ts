// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';

@InputType()
export class PostCreateOrConnectWithoutCategoriesInput {
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostCreateWithoutCategoriesInput)
  @Field(() => PostCreateWithoutCategoriesInput, {
    nullable: false,
    description: undefined,
  })
  create!: PostCreateWithoutCategoriesInput;
}