// This file is generated by @nest-ease/generator. DO NOT MANUALLY MODIFY!
import { Module, ModuleMetadata } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { CategoryModule } from '../category/category.module';
import { CategoryMetadataModule } from '../category-metadata/category-metadata.module';
import { StandaloneModelModule } from '../standalone-model/standalone-model.module';

const modules: ModuleMetadata['imports'] = [
  UserModule,
  PostModule,
  CategoryModule,
  CategoryMetadataModule,
  StandaloneModelModule,
];

const metadata: ModuleMetadata = {
  imports: modules,
  exports: modules,
}

@Module(metadata)
export class NestEaseModule {
}
