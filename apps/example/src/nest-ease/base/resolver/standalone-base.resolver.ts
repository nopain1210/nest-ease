// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StandaloneBaseService } from '../service';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Standalone } from '../model';
import {
  StandaloneCreateArgs,
  StandaloneUpdateArgs,
  StandaloneDeleteArgs,
  StandaloneFindUniqueArgs,
  StandaloneCountArgs,
  StandaloneFindManyArgs,
  StandaloneCreateManyArgs,
  StandaloneUpdateManyArgs,
  StandaloneDeleteManyArgs,
} from '../args';
import { AffectedRowsOutput } from '../output';

@Resolver(() => Standalone)
export class StandaloneBaseResolver {
  constructor(protected readonly service: StandaloneBaseService) {}

  @Mutation(() => Standalone, { nullable: false })
  async createStandalone(
    @Args() args: StandaloneCreateArgs
  ): Promise<Standalone> {
    return this.service.create(args);
  }

  @Mutation(() => Standalone, { nullable: true })
  async updateStandalone(
    @Args() args: StandaloneUpdateArgs
  ): Promise<Standalone | null> {
    return this.service.update(args);
  }

  @Mutation(() => Standalone, { nullable: true })
  async deleteStandalone(
    @Args() args: StandaloneDeleteArgs
  ): Promise<Standalone | null> {
    return this.service.delete(args);
  }

  @Query(() => Standalone, { nullable: true })
  async standalone(
    @Args() args: StandaloneFindUniqueArgs
  ): Promise<Standalone | null> {
    return this.service.findUnique(args);
  }

  @Query(() => Int, { nullable: false })
  async standaloneCount(@Args() args: StandaloneCountArgs): Promise<number> {
    return this.service.count(args);
  }

  @Query(() => [Standalone], { nullable: false })
  async standaloneList(
    @Args() args: StandaloneFindManyArgs
  ): Promise<Array<Standalone>> {
    return this.service.findMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async createStandaloneList(
    @Args() args: StandaloneCreateManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.service.createMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async updateStandaloneList(
    @Args() args: StandaloneUpdateManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.service.updateMany(args);
  }

  @Mutation(() => AffectedRowsOutput, { nullable: false })
  async deleteStandaloneList(
    @Args() args: StandaloneDeleteManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.service.deleteMany(args);
  }
}
