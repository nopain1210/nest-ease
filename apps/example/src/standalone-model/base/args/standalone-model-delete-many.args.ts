// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { StandaloneModelWhereInput } from '../input/standalone-model-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class StandaloneModelDeleteManyArgs {
  @Type(() => StandaloneModelWhereInput)
  @Field(() => StandaloneModelWhereInput, {
    nullable: true,
    description: undefined,
  })
  where?: Omit<StandaloneModelWhereInput, never> | null;
}
