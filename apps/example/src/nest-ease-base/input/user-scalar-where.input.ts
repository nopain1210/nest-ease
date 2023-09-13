// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from './int-filter.input';
import { StringFilter } from './string-filter.input';
import { StringNullableFilter } from './string-nullable-filter.input';
import { EnumUserRoleFilter } from './enum-user-role-filter.input';
import { DateTimeFilter } from './date-time-filter.input';
import { IntNullableFilter } from './int-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {
  @Type(() => UserScalarWhereInput)
  @Field(() => [UserScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: Array<UserScalarWhereInput>;
  @Type(() => UserScalarWhereInput)
  @Field(() => [UserScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: Array<UserScalarWhereInput>;
  @Type(() => UserScalarWhereInput)
  @Field(() => [UserScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: Array<UserScalarWhereInput>;
  @Type(() => IntFilter)
  @Field(() => IntFilter, { nullable: true, description: undefined })
  id?: IntFilter;
  @Type(() => StringFilter)
  @Field(() => StringFilter, { nullable: true, description: undefined })
  email?: StringFilter;
  @Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, { nullable: true, description: undefined })
  name?: StringNullableFilter;
  @Type(() => EnumUserRoleFilter)
  @Field(() => EnumUserRoleFilter, { nullable: true, description: undefined })
  role?: EnumUserRoleFilter;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  createdAt?: DateTimeFilter;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  updatedAt?: DateTimeFilter;
  @Type(() => IntNullableFilter)
  @Field(() => IntNullableFilter, { nullable: true, description: undefined })
  parentId?: IntNullableFilter;
  @Type(() => StringFilter)
  @Field(() => StringFilter, { nullable: true, description: undefined })
  toMapField?: StringFilter;
}
