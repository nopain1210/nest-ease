// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLByte } from 'graphql-scalars';

@InputType()
export class StandaloneModelCreatebytesListInput {
  @Field(() => [GraphQLByte], { nullable: false, description: undefined })
  set!: Array<Buffer>;
}
