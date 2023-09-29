// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../../prisma/base/input/string-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../../../prisma/base/input/nullable-string-field-update-operations.input';
import { UserRole } from '../enum/user-role.enum';
import { DateTimeFieldUpdateOperationsInput } from '../../../prisma/base/input/date-time-field-update-operations.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../../../post/base/input/post-update-many-without-author-nested.input';
import { UserUpdateOneWithoutChildrenNestedInput } from './user-update-one-without-children-nested.input';
import { UserUpdateManyWithoutParentNestedInput } from './user-update-many-without-parent-nested.input';
import { PostUpdateManyWithoutAnotherAuthorNestedInput } from '../../../post/base/input/post-update-many-without-another-author-nested.input';

@InputType()
export class UserUpdateInput {
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
  mappedField?: StringFieldUpdateOperationsInput | null;
  @Type(() => PostUpdateManyWithoutAuthorNestedInput)
  @Field(() => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
    description: undefined,
  })
  posts?: PostUpdateManyWithoutAuthorNestedInput | null;
  @Type(() => UserUpdateOneWithoutChildrenNestedInput)
  @Field(() => UserUpdateOneWithoutChildrenNestedInput, {
    nullable: true,
    description: undefined,
  })
  parent?: UserUpdateOneWithoutChildrenNestedInput | null;
  @Type(() => UserUpdateManyWithoutParentNestedInput)
  @Field(() => UserUpdateManyWithoutParentNestedInput, {
    nullable: true,
    description: undefined,
  })
  children?: UserUpdateManyWithoutParentNestedInput | null;
  @Type(() => PostUpdateManyWithoutAnotherAuthorNestedInput)
  @Field(() => PostUpdateManyWithoutAnotherAuthorNestedInput, {
    nullable: true,
    description: undefined,
  })
  anotherPosts?: PostUpdateManyWithoutAnotherAuthorNestedInput | null;
}
