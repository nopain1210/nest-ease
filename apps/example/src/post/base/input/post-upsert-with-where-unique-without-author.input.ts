// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { PostUpdateWithoutAuthorInput } from './post-update-without-author.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, {
    nullable: false,
    description: undefined,
  })
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Type(() => PostUpdateWithoutAuthorInput)
  @Field(() => PostUpdateWithoutAuthorInput, {
    nullable: false,
    description: undefined,
  })
  update!: PostUpdateWithoutAuthorInput;
  @Type(() => PostCreateWithoutAuthorInput)
  @Field(() => PostCreateWithoutAuthorInput, {
    nullable: false,
    description: undefined,
  })
  create!: PostCreateWithoutAuthorInput;
}
