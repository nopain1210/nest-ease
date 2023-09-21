// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSON, GraphQLByte, GraphQLBigInt } from 'graphql-scalars';
import type { JsonValue } from 'type-fest';
import { StandaloneModelCreatejsonListInput } from './standalone-model-createjson-list.input';
import { Type, Transform } from 'class-transformer';
import { StandaloneModelCreatestringListInput } from './standalone-model-createstring-list.input';
import { GraphQLDecimal, transformToDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { StandaloneModelCreatedecimalListInput } from './standalone-model-createdecimal-list.input';
import { StandaloneModelCreatebytesListInput } from './standalone-model-createbytes-list.input';
import { StandaloneModelCreatebigIntListInput } from './standalone-model-createbig-int-list.input';
import { StandaloneModelCreatedateTimeListInput } from './standalone-model-createdate-time-list.input';

@InputType()
export class StandaloneModelCreateManyInput {
  @Field(() => Int, { nullable: true, description: undefined })
  id?: number | null;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
  @Field(() => String, { nullable: false, description: undefined })
  name!: string;
  @Field(() => GraphQLJSON, { nullable: false, description: undefined })
  jsonField!: JsonValue;
  @Type(() => StandaloneModelCreatejsonListInput)
  @Field(() => StandaloneModelCreatejsonListInput, { nullable: true, description: undefined })
  jsonList?: StandaloneModelCreatejsonListInput | null;
  @Type(() => StandaloneModelCreatestringListInput)
  @Field(() => StandaloneModelCreatestringListInput, { nullable: true, description: undefined })
  stringList?: StandaloneModelCreatestringListInput | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: false, description: undefined })
  decimalField!: Decimal;
  @Type(() => StandaloneModelCreatedecimalListInput)
  @Field(() => StandaloneModelCreatedecimalListInput, { nullable: true, description: undefined })
  decimalList?: StandaloneModelCreatedecimalListInput | null;
  @Field(() => Number, { nullable: false, description: undefined })
  floatField!: number;
  @Field(() => GraphQLByte, { nullable: false, description: undefined })
  bytesField!: Buffer;
  @Type(() => StandaloneModelCreatebytesListInput)
  @Field(() => StandaloneModelCreatebytesListInput, { nullable: true, description: undefined })
  bytesList?: StandaloneModelCreatebytesListInput | null;
  @Field(() => GraphQLBigInt, { nullable: false, description: undefined })
  bigIntField!: bigint | number;
  @Type(() => StandaloneModelCreatebigIntListInput)
  @Field(() => StandaloneModelCreatebigIntListInput, { nullable: true, description: undefined })
  bigIntList?: StandaloneModelCreatebigIntListInput | null;
  @Field(() => Date, { nullable: false, description: undefined })
  dateTimeField!: Date | string;
  @Type(() => StandaloneModelCreatedateTimeListInput)
  @Field(() => StandaloneModelCreatedateTimeListInput, { nullable: true, description: undefined })
  dateTimeList?: StandaloneModelCreatedateTimeListInput | null;
}
