import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: 'decimal', precision: 4, scale: 2 })
  public amount: number;

  @Column()
  public name: string;

  @Column()
  public size: number;

  @Column({ name: 'stripe_product_id' })
  stripeProductId: string;

  @Column({ default: false })
  public reoccurring: boolean;

  @Column({ name: 'valid_for', nullable: true})
  public validFor: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
