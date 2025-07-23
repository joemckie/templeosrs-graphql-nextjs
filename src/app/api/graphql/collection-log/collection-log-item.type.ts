import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CollectionLogItem {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  date!: Date;

  @Field()
  count!: number;
}
