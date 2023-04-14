import { DbTableName } from 'src/common/enums/enums';
import { Column, Entity } from 'src/common/decorators/decorators';

import { BaseEntity } from '../entities';

@Entity({ name: DbTableName.POSTS })
class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;
}

export { PostEntity };
