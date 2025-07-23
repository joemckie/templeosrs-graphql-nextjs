import type { NextRequest } from 'next/server';
import type { CollectionLogAPI } from './datasources/collection-log.datasource';
import type { PlayerAPI } from './datasources/player.datasource';

export interface Context {
  req: NextRequest;
  dataSources: {
    collectionLogAPI: CollectionLogAPI;
    playerAPI: PlayerAPI;
  };
}
