// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StandaloneCreatescalarListInput {
  @Field(() => [String], { nullable: false, description: undefined })
  set!: Array<string>;
}
