// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StandaloneModelUpdatestringListInput {
  @Field(() => [String], { nullable: true, description: undefined })
  set?: Array<string> | null;
  @Field(() => [String], { nullable: true, description: undefined })
  push?: Array<string> | null;
}
