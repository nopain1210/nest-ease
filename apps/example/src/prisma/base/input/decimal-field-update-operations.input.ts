// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import {
  GraphQLDecimal,
  transformToDecimal,
} from 'prisma-graphql-type-decimal';
import { Transform, Type } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

@InputType()
export class DecimalFieldUpdateOperationsInput {
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  set?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  increment?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  decrement?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  multiply?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  divide?: Decimal | null;
}
