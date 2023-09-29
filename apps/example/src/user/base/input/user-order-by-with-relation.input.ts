// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../../../prisma/base/enum/sort-order.enum';
import { PostOrderByRelationAggregateInput } from '../../../post/base/input/post-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true, description: undefined })
  id?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  email?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  name?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  role?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  createdAt?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  updatedAt?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  parentId?: keyof typeof SortOrder | null;
  @Field(() => SortOrder, { nullable: true, description: undefined })
  mappedField?: keyof typeof SortOrder | null;
  @Type(() => PostOrderByRelationAggregateInput)
  @Field(() => PostOrderByRelationAggregateInput, {
    nullable: true,
    description: undefined,
  })
  posts?: PostOrderByRelationAggregateInput | null;
  @Type(() => UserOrderByWithRelationInput)
  @Field(() => UserOrderByWithRelationInput, {
    nullable: true,
    description: undefined,
  })
  parent?: Omit<UserOrderByWithRelationInput, never> | null;
  @Type(() => UserOrderByRelationAggregateInput)
  @Field(() => UserOrderByRelationAggregateInput, {
    nullable: true,
    description: undefined,
  })
  children?: UserOrderByRelationAggregateInput | null;
  @Type(() => PostOrderByRelationAggregateInput)
  @Field(() => PostOrderByRelationAggregateInput, {
    nullable: true,
    description: undefined,
  })
  anotherPosts?: PostOrderByRelationAggregateInput | null;
}
