// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PostKind } from '../enum/post-kind.enum';

@ObjectType({ description: undefined })
export class Post {
  @Field(() => Int, { nullable: false, description: undefined })
  id!: number;
  @Field(() => String, { nullable: false, description: undefined })
  title!: string;
  @Field(() => String, { nullable: true, description: undefined })
  content?: string | null;
  @Field(() => Boolean, { nullable: false, description: undefined })
  published!: boolean;
  @Field(() => Int, { nullable: false, description: undefined })
  authorId!: number;
  @Field(() => Int, { nullable: false, description: undefined })
  anotherAuthorId!: number;
  @Field(() => Date, { nullable: false, description: undefined })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false, description: undefined })
  updatedAt!: Date | string;
  @Field(() => PostKind, { nullable: false, description: undefined })
  postKind!: keyof typeof PostKind;
}
