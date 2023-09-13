// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class NestedDateTimeFilter {
  @Field(() => Date, { nullable: true, description: undefined })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true, description: undefined })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true, description: undefined })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true, description: undefined })
  lt?: Date | string;
  @Field(() => Date, { nullable: true, description: undefined })
  lte?: Date | string;
  @Field(() => Date, { nullable: true, description: undefined })
  gt?: Date | string;
  @Field(() => Date, { nullable: true, description: undefined })
  gte?: Date | string;
  @Type(() => NestedDateTimeFilter)
  @Field(() => NestedDateTimeFilter, { nullable: true, description: undefined })
  not?: NestedDateTimeFilter;
}
