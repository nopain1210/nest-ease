// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateWithoutChildrenInput } from './user-update-without-children.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChildrenInput } from './user-create-without-children.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutChildrenInput {
  @Type(() => UserUpdateWithoutChildrenInput)
  @Field(() => UserUpdateWithoutChildrenInput, {
    nullable: false,
    description: undefined,
  })
  update!: UserUpdateWithoutChildrenInput;
  @Type(() => UserCreateWithoutChildrenInput)
  @Field(() => UserCreateWithoutChildrenInput, {
    nullable: false,
    description: undefined,
  })
  create!: UserCreateWithoutChildrenInput;
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  where?: UserWhereInput | null;
}
