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

@Entity('limit')
export class LimitEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ name: 'current_limit', default: 5 })
  currentLimit: number;

  @Column({ name: 'per_hour_limit', default: 5 })
  perHourLimit: number;

  @Column({ name: 'extra_limit', default: 0 })
  extraLimit: number;

  @Column({ name: 'extra_valid_to', type: 'timestamp', nullable: true })
  extraValidTo: Date;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.limit, {
    cascade: true,
  })
  public user: UserEntity;

  @Column({ name: 'user_id' })
  @RelationId((limit: LimitEntity) => limit.user)
  public userId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
