// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: undefined })
export class Category {
  @Field(() => Int, { nullable: false, description: undefined })
  id!: number;
  @Field(() => String, { nullable: false, description: undefined })
  name!: string;
  @Field(() => Date, { nullable: false, description: undefined })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false, description: undefined })
  updatedAt!: Date | string;
}
