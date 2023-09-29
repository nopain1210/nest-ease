// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, HideField } from '@nestjs/graphql';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutAuthorInput } from './post-create-or-connect-without-author.input';
import { PostCreateManyAuthorInputEnvelope } from './post-create-many-author-input-envelope.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@InputType()
export class PostCreateNestedManyWithoutAuthorInput {
  @Type(() => PostCreateWithoutAuthorInput)
  @Field(() => [PostCreateWithoutAuthorInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<PostCreateWithoutAuthorInput> | null;
  @Type(() => PostCreateOrConnectWithoutAuthorInput)
  @HideField()
  connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput> | null;
  @Type(() => PostCreateManyAuthorInputEnvelope)
  @HideField()
  createMany?: PostCreateManyAuthorInputEnvelope | null;
  @Type(() => PostWhereUniqueInput)
  @Field(() => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
