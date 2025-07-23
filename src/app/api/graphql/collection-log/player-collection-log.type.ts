import { Field, Int, ObjectType } from 'type-graphql';
import { CollectionLogItem } from './collection-log-item.type';

@ObjectType()
export class PlayerCollectionLog {
  @Field((_type) => Int)
  totalCollectionsFinished!: number;

  @Field(() => [CollectionLogItem])
  items!: CollectionLogItem[];
}
