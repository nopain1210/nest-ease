// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { Type } from 'class-transformer';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';

@InputType()
export class UserUpdateManyWithWhereWithoutParentInput {
  @Type(() => UserScalarWhereInput)
  @Field(() => UserScalarWhereInput, {
    nullable: false,
    description: undefined,
  })
  where!: UserScalarWhereInput;
  @Type(() => UserUpdateManyMutationInput)
  @Field(() => UserUpdateManyMutationInput, {
    nullable: false,
    description: undefined,
  })
  data!: UserUpdateManyMutationInput;
}
