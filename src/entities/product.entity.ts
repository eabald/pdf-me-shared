import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

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

  @Column({ nullable: true})
  public validFor: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
