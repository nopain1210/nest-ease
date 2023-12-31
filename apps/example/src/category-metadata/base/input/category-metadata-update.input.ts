// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../../../prisma/base/input/date-time-field-update-operations.input';
import { Type } from 'class-transformer';
import { CategoryMetadataUpdatemetadataInput } from './category-metadata-updatemetadata.input';
import { CategoryUpdateOneRequiredWithoutMetadataNestedInput } from '../../../category/base/input/category-update-one-required-without-metadata-nested.input';

@InputType()
export class CategoryMetadataUpdateInput {
  @Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true, description: undefined })
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  @Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true, description: undefined })
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
  @Type(() => CategoryMetadataUpdatemetadataInput)
  @Field(() => CategoryMetadataUpdatemetadataInput, { nullable: true, description: undefined })
  metadata?: CategoryMetadataUpdatemetadataInput | null;
  @Type(() => CategoryUpdateOneRequiredWithoutMetadataNestedInput)
  @Field(() => CategoryUpdateOneRequiredWithoutMetadataNestedInput, { nullable: true, description: undefined })
  category?: CategoryUpdateOneRequiredWithoutMetadataNestedInput | null;
}
