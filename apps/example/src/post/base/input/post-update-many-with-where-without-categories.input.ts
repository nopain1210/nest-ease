// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { Type } from 'class-transformer';
import { PostUpdateManyMutationInput } from './post-update-many-mutation.input';

@InputType()
export class PostUpdateManyWithWhereWithoutCategoriesInput {
  @Type(() => PostScalarWhereInput)
  @Field(() => PostScalarWhereInput, { nullable: false, description: undefined })
  where!: PostScalarWhereInput;
  @Type(() => PostUpdateManyMutationInput)
  @Field(() => PostUpdateManyMutationInput, { nullable: false, description: undefined })
  data!: PostUpdateManyMutationInput;
}
