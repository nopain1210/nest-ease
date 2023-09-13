// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgsType, Field, Int } from '@nestjs/graphql';
import {
  PostWhereInput,
  PostOrderByWithRelationInput,
  PostWhereUniqueInput,
} from '../input';
import { Type } from 'class-transformer';
import { Prisma } from '../../prisma-client';
import { PostScalarFieldEnum } from '../enum';

@ArgsType()
export class PostFindManyArgs {
  @Type(() => PostWhereInput)
  @Field(() => PostWhereInput, { nullable: true, description: undefined })
  where?: Omit<PostWhereInput, never>;
  @Type(() => PostOrderByWithRelationInput)
  @Field(() => [PostOrderByWithRelationInput], {
    nullable: true,
    description: undefined,
  })
  orderBy?: Array<PostOrderByWithRelationInput>;
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: true, description: undefined })
  cursor?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
  @Field(() => Int, { nullable: true, description: undefined })
  take?: number;
  @Field(() => Int, { nullable: true, description: undefined })
  skip?: number;
  @Field(() => [PostScalarFieldEnum], {
    nullable: true,
    description: undefined,
  })
  distinct?: Array<keyof typeof PostScalarFieldEnum>;
}
