// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class StandaloneModelUpdatebigIntListInput {
  @Field(() => [GraphQLBigInt], { nullable: true, description: undefined })
  set?: Array<bigint> | Array<number> | null;
  @Field(() => [GraphQLBigInt], { nullable: true, description: undefined })
  push?: Array<bigint> | Array<number> | null;
}
