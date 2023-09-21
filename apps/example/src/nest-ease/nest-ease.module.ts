// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { CategoryModule } from '../category/category.module';
import { CategoryMetadataModule } from '../category-metadata/category-metadata.module';
import { StandaloneModelModule } from '../standalone-model/standalone-model.module';

@Module({
    imports: [UserModule, PostModule, CategoryModule, CategoryMetadataModule, StandaloneModelModule],
    exports: [UserModule, PostModule, CategoryModule, CategoryMetadataModule, StandaloneModelModule],
  })
export class NestEaseModule {
}
