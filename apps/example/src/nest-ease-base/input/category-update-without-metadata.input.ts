// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputType, Field } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from './date-time-field-update-operations.input';
import { PostUpdateManyWithoutCategoriesNestedInput } from './post-update-many-without-categories-nested.input';

@InputType()
export class CategoryUpdateWithoutMetadataInput {
  @Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  name?: StringFieldUpdateOperationsInput;
  @Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput;
  @Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  @Type(() => PostUpdateManyWithoutCategoriesNestedInput)
  @Field(() => PostUpdateManyWithoutCategoriesNestedInput, {
    nullable: true,
    description: undefined,
  })
  posts?: Omit<PostUpdateManyWithoutCategoriesNestedInput, never>;
}
