import { DbTableName } from 'src/common/enums/enums';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../entities';

@Entity({ name: DbTableName.POSTS })
class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;
}

export { PostEntity };
