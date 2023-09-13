// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutAuthorInput } from './post-create-or-connect-without-author.input';
import { PostCreateManyAuthorInputEnvelope } from './post-create-many-author-input-envelope.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Prisma } from '../../prisma-client';

@InputType()
export class PostCreateNestedManyWithoutAuthorInput {
  @Type(() => PostCreateWithoutAuthorInput)
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<PostCreateWithoutAuthorInput>;
  @Type(() => PostCreateOrConnectWithoutAuthorInput)
  @Field(() => [PostCreateOrConnectWithoutAuthorInput], {
    nullable: true,
    description: undefined,
  })
  connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
  @Type(() => PostCreateManyAuthorInputEnvelope)
  @Field(() => PostCreateManyAuthorInputEnvelope, {
    nullable: true,
    description: undefined,
  })
  createMany?: PostCreateManyAuthorInputEnvelope;
  @Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
