// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field, Int } from '@nestjs/graphql';
import { PostKind } from '../enum';
import { GraphQLJSON } from 'graphql-scalars';
import { PostCreatescalarListInput } from './post-createscalar-list.input';
import { Type } from 'class-transformer';

@InputType()
export class PostCreateManyAnotherAuthorInput {
  @Field(() => Int, { nullable: true, description: undefined })
  id?: number | null;
  @Field(() => String, { nullable: false, description: undefined })
  title!: string;
  @Field(() => String, { nullable: true, description: undefined })
  content?: string | null;
  @Field(() => Boolean, { nullable: true, description: undefined })
  published?: boolean | null;
  @Field(() => Int, { nullable: false, description: undefined })
  authorId!: number;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
  @Field(() => PostKind, { nullable: false, description: undefined })
  postKind!: keyof typeof PostKind;
  @Field(() => GraphQLJSON, { nullable: false, description: undefined })
  jsonField!: any;
  @Type(() => PostCreatescalarListInput)
  @Field(() => PostCreatescalarListInput, {
    nullable: true,
    description: undefined,
  })
  scalarList?: PostCreatescalarListInput | null;
}
