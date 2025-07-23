import type { CollectionLogAPI } from './datasources/collection-log.datasource';
import type { PlayerAPI } from './datasources/player.datasource';

export interface Context {
  dataSources: {
    collectionLogAPI: CollectionLogAPI;
    playerAPI: PlayerAPI;
  };
}
