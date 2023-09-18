// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from './nullable-string-field-update-operations.input';
import { UserRole } from '../enum';
import { DateTimeFieldUpdateOperationsInput } from './date-time-field-update-operations.input';
import { PostUpdateManyWithoutAuthorNestedInput } from './post-update-many-without-author-nested.input';
import { UserUpdateManyWithoutParentNestedInput } from './user-update-many-without-parent-nested.input';
import { PostUpdateManyWithoutAnotherAuthorNestedInput } from './post-update-many-without-another-author-nested.input';

@InputType()
export class UserUpdateWithoutParentInput {
  @Type(() => StringFieldUpdateOperationsInput)
  @Field(() => StringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  email?: StringFieldUpdateOperationsInput | null;
  @Type(() => NullableStringFieldUpdateOperationsInput)
  @Field(() => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  name?: NullableStringFieldUpdateOperationsInput | null;
  @Field(() => UserRole, { nullable: true, description: undefined })
  role?: keyof typeof UserRole | null;
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
  toMapField?: StringFieldUpdateOperationsInput | null;
  @Type(() => PostUpdateManyWithoutAuthorNestedInput)
  @Field(() => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
    description: undefined,
  })
  posts?: Omit<PostUpdateManyWithoutAuthorNestedInput, never> | null;
  @Type(() => UserUpdateManyWithoutParentNestedInput)
  @Field(() => UserUpdateManyWithoutParentNestedInput, {
    nullable: true,
    description: undefined,
  })
  children?: Omit<UserUpdateManyWithoutParentNestedInput, never> | null;
  @Type(() => PostUpdateManyWithoutAnotherAuthorNestedInput)
  @Field(() => PostUpdateManyWithoutAnotherAuthorNestedInput, {
    nullable: true,
    description: undefined,
  })
  anotherPosts?: Omit<
    PostUpdateManyWithoutAnotherAuthorNestedInput,
    never
  > | null;
}
