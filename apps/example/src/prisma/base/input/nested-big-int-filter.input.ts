// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Type } from 'class-transformer';

@InputType()
export class NestedBigIntFilter {
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  equals?: bigint | number | null;
  @Field(() => [GraphQLBigInt], { nullable: true, description: undefined })
  in?: Array<bigint> | Array<number> | null;
  @Field(() => [GraphQLBigInt], { nullable: true, description: undefined })
  notIn?: Array<bigint> | Array<number> | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  lt?: bigint | number | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  lte?: bigint | number | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  gt?: bigint | number | null;
  @Field(() => GraphQLBigInt, { nullable: true, description: undefined })
  gte?: bigint | number | null;
  @Type(() => NestedBigIntFilter)
  @Field(() => NestedBigIntFilter, { nullable: true, description: undefined })
  not?: NestedBigIntFilter | null;
}
