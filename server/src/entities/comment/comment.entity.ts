import { Column, Entity, ManyToOne } from 'src/common/decorators/decorators';
import { BaseEntity, PostEntity } from '../entities';
import { DbTableName } from 'src/common/enums/enums';

@Entity({ name: DbTableName.COMMENTS })
class CommentEntity extends BaseEntity {
  @Column()
  text: string;

  @ManyToOne(() => PostEntity, (post) => post.comments, { onDelete: 'CASCADE' })
  post: PostEntity;
}

export { CommentEntity };
