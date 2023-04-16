import { Column, Entity, ManyToOne } from 'src/common/decorators/decorators';
import { DbTableName } from 'src/common/enums/enums';

import { BaseEntity, PostEntity } from '../entities';

@Entity({ name: DbTableName.COMMENTS })
class CommentEntity extends BaseEntity {
  @Column()
  public text: string;

  @ManyToOne(() => PostEntity, (post) => post.comments, { onDelete: 'CASCADE' })
  public post: PostEntity;
}

export { CommentEntity };
