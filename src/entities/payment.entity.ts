import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  RelationId,
  CreateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: 'decimal' })
  public amount: number;

  @Column({ default: false })
  public confirmed: boolean;

  @Index('payment_userId_index')
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.payments)
  public user: UserEntity;

  @Column()
  @RelationId((payment: PaymentEntity) => payment.user)
  public userId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  fulfilledAt: Date;
}
