// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';
import { Transform, Type } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

@InputType()
export class StandaloneModelUpdatedecimalListInput {
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => [GraphQLDecimal], { nullable: true, description: undefined })
  set?: Array<Decimal> | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => [GraphQLDecimal], { nullable: true, description: undefined })
  push?: Array<Decimal> | null;
}