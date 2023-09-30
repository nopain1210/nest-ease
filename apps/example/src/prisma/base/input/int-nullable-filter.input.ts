// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, Int } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class IntNullableFilter {
  @Field(() => Int, { nullable: true, description: undefined })
  equals?: number | null;
  @Field(() => [Int], { nullable: true, description: undefined })
  in?: Array<number> | null;
  @Field(() => [Int], { nullable: true, description: undefined })
  notIn?: Array<number> | null;
  @Field(() => Int, { nullable: true, description: undefined })
  lt?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  lte?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  gt?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  gte?: number | null;
  @Type(() => NestedIntNullableFilter)
  @Field(() => NestedIntNullableFilter, { nullable: true, description: undefined })
  not?: NestedIntNullableFilter | null;
}
