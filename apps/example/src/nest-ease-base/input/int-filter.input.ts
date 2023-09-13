// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field, Int } from '@nestjs/graphql';
import { NestedIntFilter } from './nested-int-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true, description: undefined })
  equals?: number;
  @Field(() => [Int], { nullable: true, description: undefined })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true, description: undefined })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true, description: undefined })
  lt?: number;
  @Field(() => Int, { nullable: true, description: undefined })
  lte?: number;
  @Field(() => Int, { nullable: true, description: undefined })
  gt?: number;
  @Field(() => Int, { nullable: true, description: undefined })
  gte?: number;
  @Type(() => NestedIntFilter)
  @Field(() => NestedIntFilter, { nullable: true, description: undefined })
  not?: NestedIntFilter;
}
