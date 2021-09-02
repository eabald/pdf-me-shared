import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  RelationId,
  CreateDateColumn,
} from 'typeorm';
import { PaymentEntity } from './payment.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: 'decimal' })
  public amount: number;

  @Column()
  public name: string;

  @Column()
  public size: number;

  @Column({ default: false })
  public reoccurring: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
