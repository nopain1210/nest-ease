// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Prisma } from '../../prisma-client';

@InputType()
export class CategoryCreateNestedManyWithoutPostsInput {
  @Type(() => CategoryCreateWithoutPostsInput)
  @Field(() => [CategoryCreateWithoutPostsInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<CategoryCreateWithoutPostsInput>;
  @Type(() => CategoryCreateOrConnectWithoutPostsInput)
  @Field(() => [CategoryCreateOrConnectWithoutPostsInput], {
    nullable: true,
    description: undefined,
  })
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput>;
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}
