import { RESTDataSource } from '@apollo/datasource-rest';

export class PlayerAPI extends RESTDataSource {
  override baseURL = 'https://templeosrs.com/api/';

  async getPlayerInfo(player: string) {
    const { data } = await this.get('player_info.php', {
      params: {
        player: encodeURIComponent(player),
      },
    });

    return data;
  }

  async getPlayerNames(player: string) {
    const { data } = await this.get('player/player_names.php', {
      params: {
        player: encodeURIComponent(player),
      },
    });

    return data;
  }

  async getPlayerStats(player: string) {
    const { data } = await this.get('player_stats.php', {
      params: {
        player: encodeURIComponent(player),
      },
    });

    return data;
  }

  async getPlayerGains(player: string) {
    const { data } = await this.get('player_gains.php', {
      params: {
        player: encodeURIComponent(player),
      },
    });

    return data;
  }

  async getPlayerDataPoints(player: string) {
    const { data } = await this.get('player_datapoints.php', {
      params: {
        player: encodeURIComponent(player),
      },
    });

    return data;
  }
}
