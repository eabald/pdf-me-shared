import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  CreateDateColumn,
  RelationId,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('template')
export class TemplateEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  content: string;

  @Index('template_ownerId_index')
  @ManyToOne(() => UserEntity, (owner: UserEntity) => owner.templates, {
    cascade: true,
  })
  public owner: UserEntity;

  @Column({ name: 'owner_id' })
  @RelationId((template: TemplateEntity) => template.owner)
  public ownerId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
