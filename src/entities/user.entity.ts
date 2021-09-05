import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { TemplateEntity } from './template.entity'
import { FileEntity } from './file.entity'
import { LimitEntity } from './limit.entity';
import { PaymentEntity } from './payment.entity';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column({ name: 'is_email_confirmed', default: false })
  public isEmailConfirmed: boolean;

  @Column({ name: 'stripe_customer_id' })
  public stripeCustomerId: string;

  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column({ name: 'is_resetting_password', default: false })
  public isResettingPassword: boolean;

  @Column({ nullable: true })
  public key: string

  @OneToMany(() => TemplateEntity, (template: TemplateEntity) => template.owner)
  public templates: TemplateEntity[];

  @OneToMany(() => FileEntity, (file: FileEntity) => file.owner)
  public files: FileEntity[];

  @OneToMany(() => PaymentEntity, (payment: PaymentEntity) => payment.user)
  public payments: PaymentEntity[];

  @OneToOne(() => LimitEntity, (limit: LimitEntity) => limit.user)
  public limit: LimitEntity;
}
