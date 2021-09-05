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

@Entity('payment')
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: 'decimal', precision: 4, scale: 2 })
  public amount: number;

  @Column({ default: false })
  public confirmed: boolean;

  @Column({ name: 'transaction_id' })
  public transactionId: string;

  @Index('payment_product_index')
  @ManyToOne(() => ProductEntity)
  @JoinColumn()
  product: ProductEntity;

  @Column({ name: 'product_id' })
  @RelationId((payment: PaymentEntity) => payment.product)
  public productId: number;

  @Index('payment_userId_index')
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.payments)
  public user: UserEntity;

  @Column({ name: 'user_id' })
  @RelationId((payment: PaymentEntity) => payment.user)
  public userId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'fulfilled_at', type: 'timestamp', nullable: true })
  fulfilledAt: Date;
}
