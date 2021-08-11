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

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  filename: string;

  @Index('file_ownerId_index')
  @ManyToOne(() => UserEntity, (owner: UserEntity) => owner.templates, {
    cascade: true,
  })
  public owner: UserEntity;

  @Column()
  @RelationId((file: FileEntity) => file.owner)
  public ownerId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
