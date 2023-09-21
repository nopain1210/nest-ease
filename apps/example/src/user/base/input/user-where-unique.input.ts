// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field, Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { StringNullableFilter } from '../../../prisma/base/input/string-nullable-filter.input';
import { EnumUserRoleFilter } from './enum-user-role-filter.input';
import { DateTimeFilter } from '../../../prisma/base/input/date-time-filter.input';
import { IntNullableFilter } from '../../../prisma/base/input/int-nullable-filter.input';
import { StringFilter } from '../../../prisma/base/input/string-filter.input';
import { PostListRelationFilter } from '../../../post/base/input/post-list-relation-filter.input';
import { UserNullableRelationFilter } from './user-nullable-relation-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => Int, { nullable: true, description: undefined })
  id?: number | null;
  @Field(() => String, { nullable: true, description: undefined })
  email?: string | null;
  @Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], { nullable: true, description: undefined })
  AND?: Array<UserWhereInput> | null;
  @Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], { nullable: true, description: undefined })
  OR?: Array<UserWhereInput> | null;
  @Type(() => UserWhereInput)
  @Field(() => [UserWhereInput], { nullable: true, description: undefined })
  NOT?: Array<UserWhereInput> | null;
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
  posts?: Omit<PostListRelationFilter, never> | null;
  @Type(() => UserNullableRelationFilter)
  @Field(() => UserNullableRelationFilter, { nullable: true, description: undefined })
  parent?: UserNullableRelationFilter | null;
  @Type(() => UserListRelationFilter)
  @Field(() => UserListRelationFilter, { nullable: true, description: undefined })
  children?: Omit<UserListRelationFilter, never> | null;
  @Type(() => PostListRelationFilter)
  @Field(() => PostListRelationFilter, { nullable: true, description: undefined })
  anotherPosts?: Omit<PostListRelationFilter, never> | null;
}
