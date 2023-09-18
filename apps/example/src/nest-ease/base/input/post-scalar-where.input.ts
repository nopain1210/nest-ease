// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from './int-filter.input';
import { StringFilter } from './string-filter.input';
import { StringNullableFilter } from './string-nullable-filter.input';
import { BoolFilter } from './bool-filter.input';
import { DateTimeFilter } from './date-time-filter.input';
import { EnumPostKindFilter } from './enum-post-kind-filter.input';
import { JsonFilter } from './json-filter.input';
import { StringNullableListFilter } from './string-nullable-list-filter.input';

@InputType()
export class PostScalarWhereInput {
  @Type(() => PostScalarWhereInput)
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: Array<PostScalarWhereInput> | null;
  @Type(() => PostScalarWhereInput)
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: Array<PostScalarWhereInput> | null;
  @Type(() => PostScalarWhereInput)
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: Array<PostScalarWhereInput> | null;
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
}
