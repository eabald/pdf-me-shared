import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TemplateEntity } from './template.entity'
import { FileEntity } from './file.entity'
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column({ default: false })
  public isResettingPassword: boolean;

  @OneToMany(() => TemplateEntity, (template: TemplateEntity) => template.owner)
  public templates: TemplateEntity[];

  @OneToMany(() => FileEntity, (file: FileEntity) => file.owner)
  public files: FileEntity[];
}
