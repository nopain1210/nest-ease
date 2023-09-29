// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../../prisma/base/input/string-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../../../prisma/base/input/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../../prisma/base/input/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../prisma/base/input/date-time-field-update-operations.input';
import { PostKind } from '../enum/post-kind.enum';

@InputType()
export class PostUpdateManyMutationInput {
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
}
