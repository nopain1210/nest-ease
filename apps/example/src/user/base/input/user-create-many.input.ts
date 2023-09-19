// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field, Int } from '@nestjs/graphql';
import { UserRole } from '../enum/user-role.enum';

@InputType()
export class UserCreateManyInput {
  @Field(() => Int, { nullable: true, description: undefined })
  id?: number | null;
  @Field(() => String, { nullable: false, description: undefined })
  email!: string;
  @Field(() => String, { nullable: true, description: undefined })
  name?: string | null;
  @Field(() => UserRole, { nullable: true, description: undefined })
  role?: keyof typeof UserRole | null;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
  @Field(() => Int, { nullable: true, description: undefined })
  parentId?: number | null;
  @Field(() => String, { nullable: false, description: undefined })
  toMapField!: string;
}