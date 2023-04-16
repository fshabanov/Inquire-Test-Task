import { Column, Entity, OneToMany } from 'src/common/decorators/decorators';
import { DbTableName } from 'src/common/enums/enums';

import { BaseEntity, CommentEntity } from '../entities';

@Entity({ name: DbTableName.POSTS })
class PostEntity extends BaseEntity {
  @Column()
  public title: string;

  @Column()
  public content: string;

  @OneToMany(() => CommentEntity, (comment) => comment.post, {
    cascade: true,
  })
  public comments: CommentEntity[];
}

export { PostEntity };
