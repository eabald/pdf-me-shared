import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { TemplateEntity } from './template.entity'
import { FileEntity } from './file.entity'
import { LimitEntity } from './limit.entity';
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column()
  public stripeCustomerId: string;

  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column({ default: false })
  public isResettingPassword: boolean;

  @Column({ nullable: true })
  public key: string

  @OneToMany(() => TemplateEntity, (template: TemplateEntity) => template.owner)
  public templates: TemplateEntity[];

  @OneToMany(() => FileEntity, (file: FileEntity) => file.owner)
  public files: FileEntity[];

  @OneToOne(() => LimitEntity, (limit: LimitEntity) => limit.user)
  public limit: LimitEntity;
}
