// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutChildrenInput } from './user-update-without-children.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutChildrenInput {
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  where?: UserWhereInput | null;
  @Type(() => UserUpdateWithoutChildrenInput)
  @Field(() => UserUpdateWithoutChildrenInput, { nullable: false, description: undefined })
  data!: UserUpdateWithoutChildrenInput;
}
