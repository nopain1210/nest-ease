// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { UserUpdateWithoutParentInput } from './user-update-without-parent.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutParentInput {
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false, description: undefined })
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Type(() => UserUpdateWithoutParentInput)
  @Field(() => UserUpdateWithoutParentInput, { nullable: false, description: undefined })
  data!: UserUpdateWithoutParentInput;
}
