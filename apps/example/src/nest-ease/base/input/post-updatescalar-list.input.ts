// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PostUpdatescalarListInput {
  @Field(() => [String], { nullable: true, description: undefined })
  set?: Array<string> | null;
  @Field(() => [String], { nullable: true, description: undefined })
  push?: Array<string> | null;
}
