// This file is generated by @nest-ease/generator. DO NOT MODIFY!
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { CategoryModule } from '../category/category.module';
import { CategoryMetadataModule } from '../category-metadata/category-metadata.module';
import { StandaloneModule } from '../standalone/standalone.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    CategoryModule,
    CategoryMetadataModule,
    StandaloneModule,
    PrismaModule,
  ],
  exports: [
    UserModule,
    PostModule,
    CategoryModule,
    CategoryMetadataModule,
    StandaloneModule,
    PrismaModule,
  ],
})
export class NestEaseModule {}
