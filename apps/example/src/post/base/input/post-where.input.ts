// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../../../prisma/base/input/int-filter.input';
import { StringFilter } from '../../../prisma/base/input/string-filter.input';
import { StringNullableFilter } from '../../../prisma/base/input/string-nullable-filter.input';
import { BoolFilter } from '../../../prisma/base/input/bool-filter.input';
import { DateTimeFilter } from '../../../prisma/base/input/date-time-filter.input';
import { EnumPostKindFilter } from './enum-post-kind-filter.input';
import { JsonFilter } from '../../../prisma/base/input/json-filter.input';
import { StringNullableListFilter } from '../../../prisma/base/input/string-nullable-list-filter.input';
import { UserRelationFilter } from '../../../user/base/input/user-relation-filter.input';
import { CategoryListRelationFilter } from '../../../category/base/input/category-list-relation-filter.input';

@InputType()
export class PostWhereInput {
  @Type(() => PostWhereInput)
  @Field(() => [PostWhereInput], { nullable: true, description: undefined })
  AND?: Array<PostWhereInput> | null;
  @Type(() => PostWhereInput)
  @Field(() => [PostWhereInput], { nullable: true, description: undefined })
  OR?: Array<PostWhereInput> | null;
  @Type(() => PostWhereInput)
  @Field(() => [PostWhereInput], { nullable: true, description: undefined })
  NOT?: Array<PostWhereInput> | null;
  @Type(() => IntFilter)
  @Field(() => IntFilter, { nullable: true, description: undefined })
  id?: IntFilter | null;
  @Type(() => StringFilter)
  @Field(() => StringFilter, { nullable: true, description: undefined })
  title?: StringFilter | null;
  @Type(() => StringNullableFilter)
  @Field(() => StringNullableFilter, { nullable: true, description: undefined })
  content?: StringNullableFilter | null;
  @Type(() => BoolFilter)
  @Field(() => BoolFilter, { nullable: true, description: undefined })
  published?: BoolFilter | null;
  @Type(() => IntFilter)
  @Field(() => IntFilter, { nullable: true, description: undefined })
  authorId?: IntFilter | null;
  @Type(() => IntFilter)
  @Field(() => IntFilter, { nullable: true, description: undefined })
  anotherAuthorId?: IntFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  createdAt?: DateTimeFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  updatedAt?: DateTimeFilter | null;
  @Type(() => EnumPostKindFilter)
  @Field(() => EnumPostKindFilter, { nullable: true, description: undefined })
  postKind?: EnumPostKindFilter | null;
  @Type(() => JsonFilter)
  @Field(() => JsonFilter, { nullable: true, description: undefined })
  jsonField?: JsonFilter | null;
  @Type(() => StringNullableListFilter)
  @Field(() => StringNullableListFilter, {
    nullable: true,
    description: undefined,
  })
  scalarList?: StringNullableListFilter | null;
  @Type(() => UserRelationFilter)
  @Field(() => UserRelationFilter, { nullable: true, description: undefined })
  author?: UserRelationFilter | null;
  @Type(() => UserRelationFilter)
  @Field(() => UserRelationFilter, { nullable: true, description: undefined })
  anotherAuthor?: UserRelationFilter | null;
  @Type(() => CategoryListRelationFilter)
  @Field(() => CategoryListRelationFilter, {
    nullable: true,
    description: undefined,
  })
  categories?: Omit<CategoryListRelationFilter, never> | null;
}