// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../../../prisma/base/enum/sort-order.enum';

@InputType()
export class PostOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true, description: undefined })
  _count?: keyof typeof SortOrder | null;
}
