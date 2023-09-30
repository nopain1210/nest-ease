// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLDecimal, transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform, Type } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';
import { NestedDecimalFilter } from './nested-decimal-filter.input';

@InputType()
export class DecimalFilter {
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  equals?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => [GraphQLDecimal], { nullable: true, description: undefined })
  in?: Array<Decimal> | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => [GraphQLDecimal], { nullable: true, description: undefined })
  notIn?: Array<Decimal> | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  lt?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  lte?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  gt?: Decimal | null;
  @Type(() => Object)
  @Transform(transformToDecimal)
  @Field(() => GraphQLDecimal, { nullable: true, description: undefined })
  gte?: Decimal | null;
  @Type(() => NestedDecimalFilter)
  @Field(() => NestedDecimalFilter, { nullable: true, description: undefined })
  not?: NestedDecimalFilter | null;
}
