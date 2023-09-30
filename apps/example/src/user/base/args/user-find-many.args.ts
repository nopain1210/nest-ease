// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { UserWhereInput } from '../input/user-where.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../input/user-order-by-with-relation.input';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';
import { Prisma } from '../../../@prisma-client';
import { UserScalarFieldEnum } from '../enum/user-scalar-field.enum';

@ArgsType()
export class UserFindManyArgs {
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  where?: UserWhereInput | null;
  @Type(() => UserOrderByWithRelationInput)
  @Field(() => [UserOrderByWithRelationInput], { nullable: true, description: undefined })
  orderBy?: Array<UserOrderByWithRelationInput> | null;
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: true, description: undefined })
  cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
  @Field(() => Int, { nullable: true, description: undefined })
  take?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  skip?: number | null;
  @Field(() => [UserScalarFieldEnum], { nullable: true, description: undefined })
  distinct?: Array<keyof typeof UserScalarFieldEnum> | null;
}
