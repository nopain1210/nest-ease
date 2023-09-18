// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { CategoryMetadataBaseService } from '../service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CategoryMetadata, Category } from '../model';
import {
  CategoryMetadataCreateArgs,
  CategoryMetadataUpdateArgs,
  CategoryMetadataDeleteArgs,
  CategoryMetadataFindUniqueArgs,
  CategoryMetadataCountArgs,
  CategoryMetadataFindManyArgs,
  CategoryMetadataCreateManyArgs,
  CategoryMetadataUpdateManyArgs,
  CategoryMetadataDeleteManyArgs,
} from '../args';
import { AffectedRowsOutput } from '../output';

@Resolver(() => CategoryMetadata)
export class CategoryMetadataBaseResolver {
  constructor(protected readonly service: CategoryMetadataBaseService) {}

  @Mutation(() => CategoryMetadata, { nullable: false })
  async createCategoryMetadata(
    @Args() args: CategoryMetadataCreateArgs
  ): Promise<CategoryMetadata> {
    return this.service.create(args);
  }

  @Mutation(() => CategoryMetadata, { nullable: true })
  async updateCategoryMetadata(
    @Args() args: CategoryMetadataUpdateArgs
  ): Promise<CategoryMetadata | null> {
    return this.service.update(args);
  }

  @Mutation(() => CategoryMetadata, { nullable: true })
  async deleteCategoryMetadata(
    @Args() args: CategoryMetadataDeleteArgs
  ): Promise<CategoryMetadata | null> {
    return this.service.delete(args);
  }

  @Query(() => CategoryMetadata, { nullable: true })
  async categoryMetadata(
    @Args() args: CategoryMetadataFindUniqueArgs
  ): Promise<CategoryMetadata | null> {
    return this.service.findUnique(args);
  }

  @Query(() => Int, { nullable: false })
  async categoryMetadataCount(
    @Args() args: CategoryMetadataCountArgs
  ): Promise<number> {
    return this.service.count(args);
  }

  @Query(() => [CategoryMetadata], { nullable: false })
  async categoryMetadataList(
    @Args() args: CategoryMetadataFindManyArgs
  ): Promise<Array<CategoryMetadata>> {
    return this.service.findMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async createCategoryMetadataList(
    @Args() args: CategoryMetadataCreateManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.service.createMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async updateCategoryMetadataList(
    @Args() args: CategoryMetadataUpdateManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.service.updateMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async deleteCategoryMetadataList(
    @Args() args: CategoryMetadataDeleteManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.service.deleteMany(args);
  }

  @ResolveField(() => Category, { nullable: false })
  category(@Parent() parent: CategoryMetadata): Promise<Category> {
    return this.service.resolveCategory(parent);
  }
}
