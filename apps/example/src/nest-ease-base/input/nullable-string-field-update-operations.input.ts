// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true, description: undefined })
  set?: string;
}
