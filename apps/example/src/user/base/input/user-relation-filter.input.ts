// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRelationFilter {
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  is?: Omit<UserWhereInput, never> | null;
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  isNot?: Omit<UserWhereInput, never> | null;
}
