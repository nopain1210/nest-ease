// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateWithoutAnotherPostsInput } from './user-update-without-another-posts.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAnotherPostsInput } from './user-create-without-another-posts.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAnotherPostsInput {
  @Type(() => UserUpdateWithoutAnotherPostsInput)
  @Field(() => UserUpdateWithoutAnotherPostsInput, {
    nullable: false,
    description: undefined,
  })
  update!: UserUpdateWithoutAnotherPostsInput;
  @Type(() => UserCreateWithoutAnotherPostsInput)
  @Field(() => UserCreateWithoutAnotherPostsInput, {
    nullable: false,
    description: undefined,
  })
  create!: UserCreateWithoutAnotherPostsInput;
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  where?: UserWhereInput | null;
}
