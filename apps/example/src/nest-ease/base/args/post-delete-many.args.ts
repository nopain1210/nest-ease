// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgsType, Field } from '@nestjs/graphql';
import { PostWhereInput } from '../input';
import { Type } from 'class-transformer';

@ArgsType()
export class PostDeleteManyArgs {
  @Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true, description: undefined })
  where?: Omit<PostWhereInput, never>;
}