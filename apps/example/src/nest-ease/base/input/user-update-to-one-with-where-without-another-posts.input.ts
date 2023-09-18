// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAnotherPostsInput } from './user-update-without-another-posts.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAnotherPostsInput {
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  where?: Omit<UserWhereInput, never> | null;
  @Type(() => UserUpdateWithoutAnotherPostsInput)
  @Field(() => UserUpdateWithoutAnotherPostsInput, {
    nullable: false,
    description: undefined,
  })
  data!: UserUpdateWithoutAnotherPostsInput;
}
