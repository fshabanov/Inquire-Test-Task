import { DbTableName } from 'src/common/enums/enums';
import { Column, Entity, OneToMany } from 'src/common/decorators/decorators';

import { BaseEntity } from '../entities';
import { CommentEntity } from '../comment/comment.entity';

@Entity({ name: DbTableName.POSTS })
class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => CommentEntity, (comment) => comment.post, {
    cascade: true,
  })
  comments: CommentEntity[];
}

export { PostEntity };
