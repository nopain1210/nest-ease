// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, HideField } from '@nestjs/graphql';
import { PostCreateWithoutAnotherAuthorInput } from './post-create-without-another-author.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutAnotherAuthorInput } from './post-create-or-connect-without-another-author.input';
import { PostCreateManyAnotherAuthorInputEnvelope } from './post-create-many-another-author-input-envelope.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@InputType()
export class PostCreateNestedManyWithoutAnotherAuthorInput {
  @Type(() => PostCreateWithoutAnotherAuthorInput)
  @Field(() => [PostCreateWithoutAnotherAuthorInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<PostCreateWithoutAnotherAuthorInput> | null;
  @Type(() => PostCreateOrConnectWithoutAnotherAuthorInput)
  @HideField()
  connectOrCreate?: Array<PostCreateOrConnectWithoutAnotherAuthorInput> | null;
  @Type(() => PostCreateManyAnotherAuthorInputEnvelope)
  @HideField()
  createMany?: PostCreateManyAnotherAuthorInputEnvelope | null;
  @Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
