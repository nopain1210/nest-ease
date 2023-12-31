// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../../../prisma/base/input/int-filter.input';
import { StringFilter } from '../../../prisma/base/input/string-filter.input';
import { StringNullableFilter } from '../../../prisma/base/input/string-nullable-filter.input';
import { EnumUserRoleFilter } from './enum-user-role-filter.input';
import { DateTimeFilter } from '../../../prisma/base/input/date-time-filter.input';
import { IntNullableFilter } from '../../../prisma/base/input/int-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {
  @Type(() => UserScalarWhereInput)
  @Field(() => [UserScalarWhereInput], { nullable: true, description: undefined })
  AND?: Array<UserScalarWhereInput> | null;
  @Type(() => UserScalarWhereInput)
  @Field(() => [UserScalarWhereInput], { nullable: true, description: undefined })
  OR?: Array<UserScalarWhereInput> | null;
  @Type(() => UserScalarWhereInput)
  @Field(() => [UserScalarWhereInput], { nullable: true, description: undefined })
  NOT?: Array<UserScalarWhereInput> | null;
  @Type(() => IntFilter)
  @Field(() => IntFilter, { nullable: true, description: undefined })
  id?: IntFilter | null;
  @Type(() => StringFilter)
  @Field(() => StringFilter, { nullable: true, description: undefined })
  email?: StringFilter | null;
  @Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, { nullable: true, description: undefined })
  name?: StringNullableFilter | null;
  @Type(() => EnumUserRoleFilter)
  @Field(() => EnumUserRoleFilter, { nullable: true, description: undefined })
  role?: EnumUserRoleFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  createdAt?: DateTimeFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  updatedAt?: DateTimeFilter | null;
  @Type(() => IntNullableFilter)
  @Field(() => IntNullableFilter, { nullable: true, description: undefined })
  parentId?: IntNullableFilter | null;
  @Type(() => StringFilter)
  @Field(() => StringFilter, { nullable: true, description: undefined })
  mappedField?: StringFilter | null;
}
