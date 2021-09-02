import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  RelationId,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { ProductEntity } from './product.entity';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: 'decimal' })
  public amount: number;

  @Column({ default: false })
  public confirmed: boolean;

  @Column()
  public transactionId: string;

  @Index('payment_product_index')
  @ManyToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity;

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
