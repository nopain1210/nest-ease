// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StandaloneModelCreatestringListInput {
  @Field(() => [String], { nullable: false, description: undefined })
  set!: Array<string>;
}
