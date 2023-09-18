// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from './date-time-field-update-operations.input';
import { PostUpdateManyWithoutCategoriesNestedInput } from './post-update-many-without-categories-nested.input';
import { CategoryMetadataUpdateOneWithoutCategoryNestedInput } from './category-metadata-update-one-without-category-nested.input';

@InputType()
export class CategoryUpdateInput {
  @Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  name?: StringFieldUpdateOperationsInput | null;
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
  @Type(() => PostUpdateManyWithoutCategoriesNestedInput)
  @Field(() => PostUpdateManyWithoutCategoriesNestedInput, {
    nullable: true,
    description: undefined,
  })
  posts?: Omit<PostUpdateManyWithoutCategoriesNestedInput, never> | null;
  @Type(() => CategoryMetadataUpdateOneWithoutCategoryNestedInput)
  @Field(() => CategoryMetadataUpdateOneWithoutCategoryNestedInput, {
    nullable: true,
    description: undefined,
  })
  metadata?: Omit<
    CategoryMetadataUpdateOneWithoutCategoryNestedInput,
    never
  > | null;
}
