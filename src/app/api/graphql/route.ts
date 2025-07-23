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

const schema = await buildSchema({
  resolvers: [PlayerResolver, PlayerCollectionLogResolver],
});

const server = new ApolloServer<Context>({ schema });

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: async (req) => {
    const { cache } = server;

    return {
      headers: req.headers,
      dataSources: {
        collectionLogAPI: new CollectionLogAPI({ cache }),
        playerAPI: new PlayerAPI({ cache }),
      },
    };
  },
});

export { handler as GET, handler as POST };
