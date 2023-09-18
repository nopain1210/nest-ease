// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from './date-time-field-update-operations.input';
import { Type } from 'class-transformer';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-scalars';
import type { JsonValue } from 'type-fest';
import { StandaloneUpdatescalarListInput } from './standalone-updatescalar-list.input';

@InputType()
export class StandaloneUpdateInput {
  @Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  @Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
  @Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  name?: StringFieldUpdateOperationsInput | null;
  @Field(() => GraphQLJSON, { nullable: true, description: undefined })
  jsonField?: JsonValue | null;
  @Type(() => StandaloneUpdatescalarListInput)
  @Field(() => StandaloneUpdatescalarListInput, {
    nullable: true,
    description: undefined,
  })
  scalarList?: StandaloneUpdatescalarListInput | null;
}
