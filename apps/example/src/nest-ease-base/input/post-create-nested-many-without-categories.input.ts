// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { PostCreateWithoutCategoriesInput } from './post-create-without-categories.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutCategoriesInput } from './post-create-or-connect-without-categories.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Prisma } from '../../prisma-client';

@InputType()
export class PostCreateNestedManyWithoutCategoriesInput {
  @Type(() => PostCreateWithoutCategoriesInput)
  @Field(() => [PostCreateWithoutCategoriesInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<PostCreateWithoutCategoriesInput>;
  @Type(() => PostCreateOrConnectWithoutCategoriesInput)
  @Field(() => [PostCreateOrConnectWithoutCategoriesInput], {
    nullable: true,
    description: undefined,
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutCategoriesInput>;
  @Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
