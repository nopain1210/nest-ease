// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { StandaloneModelUpdateManyMutationInput } from '../input/standalone-model-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StandaloneModelWhereInput } from '../input/standalone-model-where.input';

@ArgsType()
export class StandaloneModelUpdateManyArgs {
  @Type(() => StandaloneModelUpdateManyMutationInput)
  @Field(() => StandaloneModelUpdateManyMutationInput, {
    nullable: false,
    description: undefined,
  })
  data!: StandaloneModelUpdateManyMutationInput;
  @Type(() => StandaloneModelWhereInput)
  @Field(() => StandaloneModelWhereInput, {
    nullable: true,
    description: undefined,
  })
  where?: Omit<StandaloneModelWhereInput, never> | null;
}