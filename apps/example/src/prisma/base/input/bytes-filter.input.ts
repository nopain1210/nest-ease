// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { GraphQLByte } from 'graphql-scalars';
import { NestedBytesFilter } from './nested-bytes-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class BytesFilter {
  @Field(() => GraphQLByte, { nullable: true, description: undefined })
  equals?: Buffer | null;
  @Field(() => [GraphQLByte], { nullable: true, description: undefined })
  in?: Array<Buffer> | null;
  @Field(() => [GraphQLByte], { nullable: true, description: undefined })
  notIn?: Array<Buffer> | null;
  @Type(() => NestedBytesFilter)
  @Field(() => NestedBytesFilter, { nullable: true, description: undefined })
  not?: NestedBytesFilter | null;
}
