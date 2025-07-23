import { Arg, Query, Resolver } from 'type-graphql';
import { Player } from './player.type';

@Resolver((_of) => Player)
export class PlayerResolver {
  @Query(() => Player)
  async player(@Arg('rsn') rsn: string): Promise<Player> {
    return {
      rsn,
    };
  }
}
