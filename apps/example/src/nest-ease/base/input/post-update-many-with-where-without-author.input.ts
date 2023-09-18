// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { Type } from 'class-transformer';
import { PostUpdateManyMutationInput } from './post-update-many-mutation.input';

@InputType()
export class PostUpdateManyWithWhereWithoutAuthorInput {
  @Type(() => PostScalarWhereInput)
  @Field(() => PostScalarWhereInput, {
    nullable: false,
    description: undefined,
  })
  where!: Omit<PostScalarWhereInput, never>;
  @Type(() => PostUpdateManyMutationInput)
  @Field(() => PostUpdateManyMutationInput, {
    nullable: false,
    description: undefined,
  })
  data!: PostUpdateManyMutationInput;
}
