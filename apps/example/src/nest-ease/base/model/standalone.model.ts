// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-scalars';
import type { JsonValue } from 'type-fest';

@ObjectType({ description: undefined })
export class Standalone {
  @Field(() => Int, { nullable: false, description: undefined })
  id!: number;
  @Field(() => Date, { nullable: false, description: undefined })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false, description: undefined })
  updatedAt!: Date | string;
  @Field(() => String, { nullable: false, description: undefined })
  name!: string;
  @Field(() => GraphQLJSON, { nullable: false, description: undefined })
  jsonField!: JsonValue;
  @Field(() => [String], { nullable: true, description: undefined })
  scalarList?: Array<string> | null;
}
