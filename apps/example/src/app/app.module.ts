import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      introspection: true,
      autoSchemaFile: true,
      sortSchema: true,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          embed: {
            endpointIsEditable: false,
          },
        }),
      ],
    }),
    PrismaModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
