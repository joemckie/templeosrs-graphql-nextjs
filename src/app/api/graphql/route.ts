import 'reflect-metadata';

import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { PlayerResolver } from './player/player.resolver';
import { PlayerAPI } from './datasources/player.datasource';
import { CollectionLogAPI } from './datasources/collection-log.datasource';

import type { Context } from './context';
import { PlayerCollectionLogResolver } from './collection-log/player-collection-log.resolver';
import { NextRequest } from 'next/server';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';

const schema = await buildSchema({
  resolvers: [PlayerResolver, PlayerCollectionLogResolver],
});

const server = new ApolloServer<Context>({
  schema,
  plugins: [
    process.env.SHOW_GRAPHQL_PLAYGROUND === 'true' ||
    process.env.NODE_ENV !== 'production'
      ? ApolloServerPluginLandingPageLocalDefault()
      : ApolloServerPluginLandingPageProductionDefault(),
  ],
});

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async (req) => {
    const { cache } = server;

    return {
      req,
      dataSources: {
        collectionLogAPI: new CollectionLogAPI({ cache }),
        playerAPI: new PlayerAPI({ cache }),
      },
    };
  },
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
