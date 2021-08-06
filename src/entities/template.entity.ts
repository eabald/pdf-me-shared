import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  CreateDateColumn,
  RelationId,
} from 'typeorm';
import { UserEntity } from './user.entity'

@Entity('templates')
export class TemplateEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  content: string;

  @Index('post_authorId_index')
  @ManyToOne(() => UserEntity, (owner: UserEntity) => owner.templates)
  public owner: UserEntity;

  @RelationId((template: TemplateEntity) => template.owner)
  public ownerId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
