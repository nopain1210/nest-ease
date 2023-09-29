// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { NestedBoolFilter } from './nested-bool-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true, description: undefined })
  equals?: boolean | null;
  @Type(() => NestedBoolFilter)
  @Field(() => NestedBoolFilter, { nullable: true, description: undefined })
  not?: NestedBoolFilter | null;
}
