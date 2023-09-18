// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { QueryMode } from '../enum';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true, description: undefined })
  equals?: string | null;
  @Field(() => [String], { nullable: true, description: undefined })
  in?: Array<string> | null;
  @Field(() => [String], { nullable: true, description: undefined })
  notIn?: Array<string> | null;
  @Field(() => String, { nullable: true, description: undefined })
  lt?: string | null;
  @Field(() => String, { nullable: true, description: undefined })
  lte?: string | null;
  @Field(() => String, { nullable: true, description: undefined })
  gt?: string | null;
  @Field(() => String, { nullable: true, description: undefined })
  gte?: string | null;
  @Field(() => String, { nullable: true, description: undefined })
  contains?: string | null;
  @Field(() => String, { nullable: true, description: undefined })
  startsWith?: string | null;
  @Field(() => String, { nullable: true, description: undefined })
  endsWith?: string | null;
  @Field(() => QueryMode, { nullable: true, description: undefined })
  mode?: keyof typeof QueryMode | null;
  @Type(() => NestedStringNullableFilter)
  @Field(() => NestedStringNullableFilter, {
    nullable: true,
    description: undefined,
  })
  not?: NestedStringNullableFilter | null;
}
