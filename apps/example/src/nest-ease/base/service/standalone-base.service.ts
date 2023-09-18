// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '../../../prisma/prisma.service';
import { Standalone } from '../model';
import {
  StandaloneCreateArgs,
  StandaloneUpdateArgs,
  StandaloneDeleteArgs,
  StandaloneDeleteManyArgs,
  StandaloneFindUniqueArgs,
  StandaloneCountArgs,
  StandaloneFindManyArgs,
} from '../args';
import { AffectedRowsOutput } from '../output';
import { Int } from '@nestjs/graphql';

export class StandaloneBaseService {
  constructor(protected readonly prisma: PrismaService) {}

  async create(args: StandaloneCreateArgs): Promise<Standalone> {
    return this.prisma.client.standalone.create(args);
  }

  async update(args: StandaloneUpdateArgs): Promise<Standalone | null> {
    return this.prisma.client.standalone.update(args);
  }

  async delete(args: StandaloneDeleteArgs): Promise<Standalone | null> {
    return this.prisma.client.standalone.delete(args);
  }

  async deleteMany(
    args: StandaloneDeleteManyArgs
  ): Promise<AffectedRowsOutput> {
    return this.prisma.client.standalone.deleteMany(args);
  }

  async findUnique(args: StandaloneFindUniqueArgs): Promise<Standalone | null> {
    return this.prisma.client.standalone.findUnique(args);
  }

  async count(args: StandaloneCountArgs): Promise<number> {
    return this.prisma.client.standalone.count(args);
  }

  async findMany(args: StandaloneFindManyArgs): Promise<Array<Standalone>> {
    return this.prisma.client.standalone.findMany(args);
  }
}
