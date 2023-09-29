// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../../../prisma/base/input/date-time-field-update-operations.input';
import { Type } from 'class-transformer';
import { StringFieldUpdateOperationsInput } from '../../../prisma/base/input/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-scalars';
import type { JsonValue } from 'type-fest';
import { StandaloneModelUpdatejsonListInput } from './standalone-model-updatejson-list.input';
import { StandaloneModelUpdatestringListInput } from './standalone-model-updatestring-list.input';
import { DecimalFieldUpdateOperationsInput } from '../../../prisma/base/input/decimal-field-update-operations.input';
import { StandaloneModelUpdatedecimalListInput } from './standalone-model-updatedecimal-list.input';
import { FloatFieldUpdateOperationsInput } from '../../../prisma/base/input/float-field-update-operations.input';
import { BytesFieldUpdateOperationsInput } from '../../../prisma/base/input/bytes-field-update-operations.input';
import { StandaloneModelUpdatebytesListInput } from './standalone-model-updatebytes-list.input';
import { BigIntFieldUpdateOperationsInput } from '../../../prisma/base/input/big-int-field-update-operations.input';
import { StandaloneModelUpdatebigIntListInput } from './standalone-model-updatebig-int-list.input';
import { StandaloneModelUpdatedateTimeListInput } from './standalone-model-updatedate-time-list.input';

@InputType()
export class StandaloneModelUpdateInput {
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
  @Type(() => StandaloneModelUpdatejsonListInput)
  @Field(() => StandaloneModelUpdatejsonListInput, {
    nullable: true,
    description: undefined,
  })
  jsonList?: StandaloneModelUpdatejsonListInput | null;
  @Type(() => StandaloneModelUpdatestringListInput)
  @Field(() => StandaloneModelUpdatestringListInput, {
    nullable: true,
    description: undefined,
  })
  stringList?: StandaloneModelUpdatestringListInput | null;
  @Type(() => DecimalFieldUpdateOperationsInput)
  @Field(() => DecimalFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  decimalField?: DecimalFieldUpdateOperationsInput | null;
  @Type(() => StandaloneModelUpdatedecimalListInput)
  @Field(() => StandaloneModelUpdatedecimalListInput, {
    nullable: true,
    description: undefined,
  })
  decimalList?: StandaloneModelUpdatedecimalListInput | null;
  @Type(() => FloatFieldUpdateOperationsInput)
  @Field(() => FloatFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  floatField?: FloatFieldUpdateOperationsInput | null;
  @Type(() => BytesFieldUpdateOperationsInput)
  @Field(() => BytesFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  bytesField?: BytesFieldUpdateOperationsInput | null;
  @Type(() => StandaloneModelUpdatebytesListInput)
  @Field(() => StandaloneModelUpdatebytesListInput, {
    nullable: true,
    description: undefined,
  })
  bytesList?: StandaloneModelUpdatebytesListInput | null;
  @Type(() => BigIntFieldUpdateOperationsInput)
  @Field(() => BigIntFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  bigIntField?: BigIntFieldUpdateOperationsInput | null;
  @Type(() => StandaloneModelUpdatebigIntListInput)
  @Field(() => StandaloneModelUpdatebigIntListInput, {
    nullable: true,
    description: undefined,
  })
  bigIntList?: StandaloneModelUpdatebigIntListInput | null;
  @Type(() => DateTimeFieldUpdateOperationsInput)
  @Field(() => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
    description: undefined,
  })
  dateTimeField?: DateTimeFieldUpdateOperationsInput | null;
  @Type(() => StandaloneModelUpdatedateTimeListInput)
  @Field(() => StandaloneModelUpdatedateTimeListInput, {
    nullable: true,
    description: undefined,
  })
  dateTimeList?: StandaloneModelUpdatedateTimeListInput | null;
}
