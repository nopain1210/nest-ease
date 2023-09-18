// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { ArgsType, Field, Int } from '@nestjs/graphql';
import {
  CategoryWhereInput,
  CategoryOrderByWithRelationInput,
  CategoryWhereUniqueInput,
} from '../input';
import { Type } from 'class-transformer';
import { Prisma } from '../../../@prisma-client';
import { CategoryScalarFieldEnum } from '../enum';

@ArgsType()
export class CategoryFindManyArgs {
  @Type(() => CategoryWhereInput)
  @Field(() => CategoryWhereInput, { nullable: true, description: undefined })
  where?: Omit<CategoryWhereInput, never> | null;
  @Type(() => CategoryOrderByWithRelationInput)
  @Field(() => [CategoryOrderByWithRelationInput], {
    nullable: true,
    description: undefined,
  })
  orderBy?: Array<CategoryOrderByWithRelationInput> | null;
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
    description: undefined,
  })
  cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
  @Field(() => Int, { nullable: true, description: undefined })
  take?: number | null;
  @Field(() => Int, { nullable: true, description: undefined })
  skip?: number | null;
  @Field(() => [CategoryScalarFieldEnum], {
    nullable: true,
    description: undefined,
  })
  distinct?: Array<keyof typeof CategoryScalarFieldEnum> | null;
}
