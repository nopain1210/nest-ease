// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PostWhereInput } from '../input/post-where.input';
import { Type } from 'class-transformer';
import { PostOrderByWithRelationInput } from '../input/post-order-by-with-relation.input';
import { PostWhereUniqueInput } from '../input/post-where-unique.input';
import { Prisma } from '../../../@prisma-client';
import { PostScalarFieldEnum } from '../enum/post-scalar-field.enum';

@ArgsType()
export class PostFindManyArgs {
  @Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true, description: undefined })
  where?: Omit<PostWhereInput, never> | null;
  @Type(() => PostOrderByWithRelationInput)
  @Field(() => [PostOrderByWithRelationInput], {
    nullable: true,
    description: undefined,
  })
  orderBy?: Array<PostOrderByWithRelationInput> | null;
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: true, description: undefined })
  cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true, description: undefined })
  take?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  skip?: number | null;
  @Field(() => [PostScalarFieldEnum], {
    nullable: true,
    description: undefined,
  })
  distinct?: Array<keyof typeof PostScalarFieldEnum> | null;
}
