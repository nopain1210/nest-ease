// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field, HideField } from '@nestjs/graphql';
import { PostCreateWithoutAnotherAuthorInput } from './post-create-without-another-author.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutAnotherAuthorInput } from './post-create-or-connect-without-another-author.input';
import { PostUpsertWithWhereUniqueWithoutAnotherAuthorInput } from './post-upsert-with-where-unique-without-another-author.input';
import { PostCreateManyAnotherAuthorInputEnvelope } from './post-create-many-another-author-input-envelope.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Prisma } from '../../../prisma-client';
import { PostUpdateWithWhereUniqueWithoutAnotherAuthorInput } from './post-update-with-where-unique-without-another-author.input';
import { PostUpdateManyWithWhereWithoutAnotherAuthorInput } from './post-update-many-with-where-without-another-author.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUpdateManyWithoutAnotherAuthorNestedInput {
  @Type(() => PostCreateWithoutAnotherAuthorInput)
  @Field(() => [PostCreateWithoutAnotherAuthorInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<PostCreateWithoutAnotherAuthorInput>;
  @Type(() => PostCreateOrConnectWithoutAnotherAuthorInput)
  @HideField()
  connectOrCreate?: Array<PostCreateOrConnectWithoutAnotherAuthorInput>;
  @Type(() => PostUpsertWithWhereUniqueWithoutAnotherAuthorInput)
  @HideField()
  upsert?: Array<PostUpsertWithWhereUniqueWithoutAnotherAuthorInput>;
  @Type(() => PostCreateManyAnotherAuthorInputEnvelope)
  @HideField()
  createMany?: PostCreateManyAnotherAuthorInputEnvelope;
  @Type(() => PostWhereUniqueInput)
  @HideField()
  set?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  disconnect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  delete?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostUpdateWithWhereUniqueWithoutAnotherAuthorInput)
  @Field(() => [PostUpdateWithWhereUniqueWithoutAnotherAuthorInput], {
    nullable: true,
    description: undefined,
  })
  update?: Array<PostUpdateWithWhereUniqueWithoutAnotherAuthorInput>;
  @Type(() => PostUpdateManyWithWhereWithoutAnotherAuthorInput)
  @HideField()
  updateMany?: Array<PostUpdateManyWithWhereWithoutAnotherAuthorInput>;
  @Type(() => PostScalarWhereInput)
  @HideField()
  deleteMany?: Array<PostScalarWhereInput>;
}
