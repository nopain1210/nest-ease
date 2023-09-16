// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { PostCreateWithoutAnotherAuthorInput } from './post-create-without-another-author.input';

@InputType()
export class PostCreateOrConnectWithoutAnotherAuthorInput {
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostCreateWithoutAnotherAuthorInput)
  @Field(() => PostCreateWithoutAnotherAuthorInput, {
    nullable: false,
    description: undefined,
  })
  create!: PostCreateWithoutAnotherAuthorInput;
}
