// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPostsInput {
  @Type(() => UserWhereInput)
  @Field(() => UserWhereInput, { nullable: true, description: undefined })
  where?: UserWhereInput | null;
  @Type(() => UserUpdateWithoutPostsInput)
  @Field(() => UserUpdateWithoutPostsInput, { nullable: false, description: undefined })
  data!: UserUpdateWithoutPostsInput;
}
