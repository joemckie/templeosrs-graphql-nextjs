import { RESTDataSource } from '@apollo/datasource-rest';

export class CollectionLogAPI extends RESTDataSource {
  override baseURL = 'https://templeosrs.com/api/collection-log/';

  async getPlayerCollectionLog(player: string, categories: string[]) {
    const { data } = await this.get('player_collection_log.php', {
      params: {
        categories: categories.map(encodeURIComponent).join(','),
        player: encodeURIComponent(player),
        includenames: '1',
        onlyitems: '1',
      },
    });

    return data;
  }
}
