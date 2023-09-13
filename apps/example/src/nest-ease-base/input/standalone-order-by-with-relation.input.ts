// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../enum';

@InputType()
export class StandaloneOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true, description: undefined })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  jsonField?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  scalarList?: keyof typeof SortOrder;
}
