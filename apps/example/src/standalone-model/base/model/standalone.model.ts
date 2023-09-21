// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSON, GraphQLByte, GraphQLBigInt } from 'graphql-scalars';
import type { JsonValue } from 'type-fest';
import { GraphQLDecimal, transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform, Type } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

@ObjectType({ description: undefined })
export class StandaloneModel {
  @Field(() => Int, { nullable: false, description: undefined })
  id!: number;
  @Field(() => Date, { nullable: false, description: undefined })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false, description: undefined })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: false, description: undefined })
  name!: string;
  @Field(() => GraphQLJSON, { nullable: false, description: undefined })
  jsonField!: JsonValue;
  @Field(() => [GraphQLJSON], { nullable: true, description: undefined })
  jsonList?: Array<JsonValue> | null;
  @Field(() => [String], { nullable: true, description: undefined })
  stringList?: Array<string> | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: false, description: undefined })
  decimalField!: Decimal;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => [GraphQLDecimal], { nullable: true, description: undefined })
  decimalList?: Array<Decimal> | null;
  @Field(() => Number, { nullable: false, description: undefined })
  floatField!: number;
  @Field(() => GraphQLByte, { nullable: false, description: undefined })
  bytesField!: Buffer;
  @Field(() => [GraphQLByte], { nullable: true, description: undefined })
  bytesList?: Array<Buffer> | null;
  @Field(() => GraphQLBigInt, { nullable: false, description: undefined })
  bigIntField!: bigint | number;
  @Field(() => [GraphQLBigInt], { nullable: true, description: undefined })
  bigIntList?: Array<bigint> | Array<number> | null;
  @Field(() => Date, { nullable: false, description: undefined })
  dateTimeField!: Date | string;
  @Field(() => [Date], { nullable: true, description: undefined })
  dateTimeList?: Array<Date> | Array<string> | null;
}
