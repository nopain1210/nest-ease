// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true, description: undefined })
  equals?: string;
  @Field(() => [String], { nullable: true, description: undefined })
  in?: Array<string>;
  @Field(() => [String], { nullable: true, description: undefined })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true, description: undefined })
  lt?: string;
  @Field(() => String, { nullable: true, description: undefined })
  lte?: string;
  @Field(() => String, { nullable: true, description: undefined })
  gt?: string;
  @Field(() => String, { nullable: true, description: undefined })
  gte?: string;
  @Field(() => String, { nullable: true, description: undefined })
  contains?: string;
  @Field(() => String, { nullable: true, description: undefined })
  startsWith?: string;
  @Field(() => String, { nullable: true, description: undefined })
  endsWith?: string;
  @Type(() => NestedStringNullableFilter)
  @Field(() => NestedStringNullableFilter, {
    nullable: true,
    description: undefined,
  })
  not?: NestedStringNullableFilter;
}
