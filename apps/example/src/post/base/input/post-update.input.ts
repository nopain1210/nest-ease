// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../../prisma/base/input/string-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../../../prisma/base/input/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../../prisma/base/input/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../prisma/base/input/date-time-field-update-operations.input';
import { PostKind } from '../enum/post-kind.enum';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../../../user/base/input/user-update-one-required-without-posts-nested.input';
import { UserUpdateOneRequiredWithoutAnotherPostsNestedInput } from '../../../user/base/input/user-update-one-required-without-another-posts-nested.input';
import { CategoryUpdateManyWithoutPostsNestedInput } from '../../../category/base/input/category-update-many-without-posts-nested.input';

@InputType()
export class PostUpdateInput {
  @Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  title?: StringFieldUpdateOperationsInput | null;
  @Type(() => NullableStringFieldUpdateOperationsInput)
  @Field(() => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  content?: NullableStringFieldUpdateOperationsInput | null;
  @Type(() => BoolFieldUpdateOperationsInput)
  @Field(() => BoolFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  published?: BoolFieldUpdateOperationsInput | null;
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
  @Field(() => PostKind, { nullable: true, description: undefined })
  postKind?: keyof typeof PostKind | null;
  @Type(() => UserUpdateOneRequiredWithoutPostsNestedInput)
  @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true,
    description: undefined,
  })
  author?: Omit<UserUpdateOneRequiredWithoutPostsNestedInput, never> | null;
  @Type(() => UserUpdateOneRequiredWithoutAnotherPostsNestedInput)
  @Field(() => UserUpdateOneRequiredWithoutAnotherPostsNestedInput, {
    nullable: true,
    description: undefined,
  })
  anotherAuthor?: Omit<
    UserUpdateOneRequiredWithoutAnotherPostsNestedInput,
    never
  > | null;
  @Type(() => CategoryUpdateManyWithoutPostsNestedInput)
  @Field(() => CategoryUpdateManyWithoutPostsNestedInput, {
    nullable: true,
    description: undefined,
  })
  categories?: Omit<CategoryUpdateManyWithoutPostsNestedInput, never> | null;
}
