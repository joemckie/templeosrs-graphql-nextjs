import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { Player } from '../player/player.type';
import type { Context } from '../context';
import { PlayerCollectionLog } from './player-collection-log.type';

@Resolver((_of) => Player)
export class PlayerCollectionLogResolver {
  @FieldResolver(() => PlayerCollectionLog, { nullable: true })
  async collectionLog(
    @Root() player: Player,
    @Ctx() { dataSources }: Context,
  ): Promise<PlayerCollectionLog> {
    const data = await dataSources.collectionLogAPI.getPlayerCollectionLog(
      player.rsn,
      ['all'],
    );

    return {
      ...data,
      totalCollectionsFinished: data.total_collections_finished,
    };
  }
}
