// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from './int-filter.input';
import { StringFilter } from './string-filter.input';
import { DateTimeFilter } from './date-time-filter.input';

@InputType()
export class CategoryScalarWhereInput {
  @Type(() => CategoryScalarWhereInput)
  @Field(() => [CategoryScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  AND?: Array<CategoryScalarWhereInput> | null;
  @Type(() => CategoryScalarWhereInput)
  @Field(() => [CategoryScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  OR?: Array<CategoryScalarWhereInput> | null;
  @Type(() => CategoryScalarWhereInput)
  @Field(() => [CategoryScalarWhereInput], {
    nullable: true,
    description: undefined,
  })
  NOT?: Array<CategoryScalarWhereInput> | null;
  @Type(() => IntFilter)
  @Field(() => IntFilter, { nullable: true, description: undefined })
  id?: IntFilter | null;
  @Type(() => StringFilter)
  @Field(() => StringFilter, { nullable: true, description: undefined })
  name?: StringFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  createdAt?: DateTimeFilter | null;
  @Type(() => DateTimeFilter)
  @Field(() => DateTimeFilter, { nullable: true, description: undefined })
  updatedAt?: DateTimeFilter | null;
}
