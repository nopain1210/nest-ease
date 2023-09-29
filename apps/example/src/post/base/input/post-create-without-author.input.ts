// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostKind } from '../enum/post-kind.enum';
import { UserCreateNestedOneWithoutAnotherPostsInput } from '../../../user/base/input/user-create-nested-one-without-another-posts.input';
import { Type } from 'class-transformer';
import { CategoryCreateNestedManyWithoutPostsInput } from '../../../category/base/input/category-create-nested-many-without-posts.input';

@InputType()
export class PostCreateWithoutAuthorInput {
  @Field(() => String, { nullable: false, description: undefined })
  title!: string;
  @Field(() => String, { nullable: true, description: undefined })
  content?: string | null;
  @Field(() => Boolean, { nullable: true, description: undefined })
  published?: boolean | null;
  @Field(() => Date, { nullable: true, description: undefined })
  createdAt?: Date | string | null;
  @Field(() => Date, { nullable: true, description: undefined })
  updatedAt?: Date | string | null;
  @Field(() => PostKind, { nullable: false, description: undefined })
  postKind!: keyof typeof PostKind;
  @Type(() => UserCreateNestedOneWithoutAnotherPostsInput)
  @Field(() => UserCreateNestedOneWithoutAnotherPostsInput, {
    nullable: false,
    description: undefined,
  })
  anotherAuthor!: Omit<UserCreateNestedOneWithoutAnotherPostsInput, never>;
  @Type(() => CategoryCreateNestedManyWithoutPostsInput)
  @Field(() => CategoryCreateNestedManyWithoutPostsInput, {
    nullable: true,
    description: undefined,
  })
  categories?: Omit<CategoryCreateNestedManyWithoutPostsInput, never> | null;
}
