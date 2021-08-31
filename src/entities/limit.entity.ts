import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  OneToOne,
  CreateDateColumn,
  RelationId,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('limits')
export class LimitEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ default: 5 })
  currentLimit: number;

  @Column({ default: 5 })
  perHourLimit: number;

  @Column({ default: 0 })
  extraLimit: number;

  @Column({ type: 'timestamp', nullable: true })
  extraValidTo: Date;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.limit, {
    cascade: true,
  })
  public user: UserEntity;

  @Column()
  @RelationId((limit: LimitEntity) => limit.user)
  public userId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
