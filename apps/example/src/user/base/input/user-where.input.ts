// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../../../prisma/base/input/int-filter.input';
import { StringFilter } from '../../../prisma/base/input/string-filter.input';
import { StringNullableFilter } from '../../../prisma/base/input/string-nullable-filter.input';
import { EnumUserRoleFilter } from './enum-user-role-filter.input';
import { DateTimeFilter } from '../../../prisma/base/input/date-time-filter.input';
import { IntNullableFilter } from '../../../prisma/base/input/int-nullable-filter.input';
import { PostListRelationFilter } from '../../../post/base/input/post-list-relation-filter.input';
import { UserNullableRelationFilter } from './user-nullable-relation-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

@InputType()
export class UserWhereInput {
  @Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], { nullable: true, description: undefined })
  AND?: Array<UserWhereInput> | null;
  @Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], { nullable: true, description: undefined })
  OR?: Array<UserWhereInput> | null;
  @Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], { nullable: true, description: undefined })
  NOT?: Array<UserWhereInput> | null;
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
  @Type(() => PostListRelationFilter)
  @Field(() => PostListRelationFilter, { nullable: true, description: undefined })
  posts?: PostListRelationFilter | null;
  @Type(() => UserNullableRelationFilter)
  @Field(() => UserNullableRelationFilter, { nullable: true, description: undefined })
  parent?: UserNullableRelationFilter | null;
  @Type(() => UserListRelationFilter)
  @Field(() => UserListRelationFilter, { nullable: true, description: undefined })
  children?: UserListRelationFilter | null;
  @Type(() => PostListRelationFilter)
  @Field(() => PostListRelationFilter, { nullable: true, description: undefined })
  anotherPosts?: PostListRelationFilter | null;
}
