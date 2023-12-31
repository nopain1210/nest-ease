// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserRole } from '../enum/user-role.enum';

/** User model documentation */
@ObjectType({ description: "User model documentation" })
export class User {
  @Field(() => Int, { nullable: false, description: undefined })
  id!: number;
  /** Email field documentation */
  @Field(() => String, { nullable: false, description: "Email field documentation" })
  email!: string;
  /**
   * Multiple line
   * documentation
   */
  @Field(() => String, { nullable: true, description: "Multiple line\ndocumentation" })
  name?: string | null;
  @Field(() => UserRole, { nullable: false, description: undefined })
  role!: keyof typeof UserRole;
  @Field(() => Date, { nullable: false, description: undefined })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false, description: undefined })
  updatedAt!: Date | string;
  @Field(() => Int, { nullable: true, description: undefined })
  parentId?: number | null;
  @Field(() => String, { nullable: false, description: undefined })
  mappedField!: string;
}
