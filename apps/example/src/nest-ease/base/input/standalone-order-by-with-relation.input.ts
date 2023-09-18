// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../enum';

@InputType()
export class StandaloneOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true, description: undefined })
  id?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  createdAt?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  updatedAt?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  name?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  jsonField?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  scalarList?: keyof typeof SortOrder | null;
}
