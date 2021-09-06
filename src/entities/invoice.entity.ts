import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Index, ManyToOne, JoinColumn, RelationId, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { ProductEntity } from './product.entity';
import { PaymentEntity } from './payment.entity';

@Entity('invoice')
export class InvoiceEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ name: 'in_month_id' })
  public inMonthId: number;

  @CreateDateColumn({ name: 'invoice_date', type: 'timestamp' })
  public invoiceDate: Date;

  @Index('invoice_is_send_index')
  @Column({ name: 'is_send', default: false })
  public isSend: boolean;

  @Column({ name: 'stripe_customer_id' })
  public stripeCustomerId: string;

  @ManyToOne(() => ProductEntity)
  @JoinColumn()
  public product: ProductEntity;

  @Column({ name: 'product_id' })
  @RelationId((invoice: InvoiceEntity) => invoice.product)
  public productId: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.invoices)
  @JoinColumn()
  public user: UserEntity;

  @Column({ name: 'user_id' })
  @RelationId((invoice: InvoiceEntity) => invoice.user)
  public userId: number;

  @OneToOne(() => PaymentEntity)
  public payment: PaymentEntity;

  @Column({ name: 'payment_id' })
  @RelationId((invoice: InvoiceEntity) => invoice.payment)
  public paymentId: number;
}
