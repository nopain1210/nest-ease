// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class BigIntFieldUpdateOperationsInput {
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  set?: bigint | number | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  increment?: bigint | number | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  decrement?: bigint | number | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  multiply?: bigint | number | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  divide?: bigint | number | null;
}
