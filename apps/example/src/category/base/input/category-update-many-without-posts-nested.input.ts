// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { InputType, Field, HideField } from '@nestjs/graphql';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { CategoryUpsertWithWhereUniqueWithoutPostsInput } from './category-upsert-with-where-unique-without-posts.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Prisma } from '../../../@prisma-client';
import { CategoryUpdateWithWhereUniqueWithoutPostsInput } from './category-update-with-where-unique-without-posts.input';
import { CategoryUpdateManyWithWhereWithoutPostsInput } from './category-update-many-with-where-without-posts.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUpdateManyWithoutPostsNestedInput {
  @Type(() => CategoryCreateWithoutPostsInput)
  @Field(() => [CategoryCreateWithoutPostsInput], {
    nullable: true,
    description: undefined,
  })
  create?: Array<CategoryCreateWithoutPostsInput> | null;
  @Type(() => CategoryCreateOrConnectWithoutPostsInput)
  @HideField()
  connectOrCreate?: Array<CategoryCreateOrConnectWithoutPostsInput> | null;
  @Type(() => CategoryUpsertWithWhereUniqueWithoutPostsInput)
  @HideField()
  upsert?: Array<CategoryUpsertWithWhereUniqueWithoutPostsInput> | null;
  @Type(() => CategoryWhereUniqueInput)
  @HideField()
  set?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  disconnect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  delete?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
  @Type(() => CategoryWhereUniqueInput)
  @Field(() => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined,
  })
  connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
  @Type(() => CategoryUpdateWithWhereUniqueWithoutPostsInput)
  @Field(() => [CategoryUpdateWithWhereUniqueWithoutPostsInput], {
    nullable: true,
    description: undefined,
  })
  update?: Array<CategoryUpdateWithWhereUniqueWithoutPostsInput> | null;
  @Type(() => CategoryUpdateManyWithWhereWithoutPostsInput)
  @HideField()
  updateMany?: Array<CategoryUpdateManyWithWhereWithoutPostsInput> | null;
  @Type(() => CategoryScalarWhereInput)
  @HideField()
  deleteMany?: Array<CategoryScalarWhereInput> | null;
}
