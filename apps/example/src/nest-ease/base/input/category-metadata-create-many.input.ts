// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CategoryMetadataCreateManyInput {
  @Field(() => Int, { nullable: true, description: undefined })
  id?: number | null;
  @Field(() => Int, { nullable: false, description: undefined })
  categoryId!: number;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
}
