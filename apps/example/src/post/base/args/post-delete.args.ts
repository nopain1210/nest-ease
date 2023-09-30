// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { PostWhereUniqueInput } from '../input/post-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';

@ArgsType()
export class PostDeleteArgs {
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: false, description: undefined })
  where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
