// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field } from '@nestjs/graphql';
import { UserUpdateInput } from '../input/user-update.input';
import { Type } from 'class-transformer';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';
import { Prisma } from '../../../@prisma-client';

@ArgsType()
export class UserUpdateArgs {
  @Type(() => UserUpdateInput)
  @Field(() => UserUpdateInput, { nullable: false, description: undefined })
  data!: UserUpdateInput;
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false, description: undefined })
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
