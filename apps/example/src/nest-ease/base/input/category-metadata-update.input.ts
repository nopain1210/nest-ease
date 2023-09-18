// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from './date-time-field-update-operations.input';
import { Type } from 'class-transformer';
import { CategoryUpdateOneRequiredWithoutMetadataNestedInput } from './category-update-one-required-without-metadata-nested.input';

@InputType()
export class CategoryMetadataUpdateInput {
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
  @Type(() => CategoryUpdateOneRequiredWithoutMetadataNestedInput)
  @Field(() => CategoryUpdateOneRequiredWithoutMetadataNestedInput, {
    nullable: true,
    description: undefined,
  })
  category?: Omit<
    CategoryUpdateOneRequiredWithoutMetadataNestedInput,
    never
  > | null;
}
