import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

@Entity('stripeEvents')
export class StripeEventEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Index('event_id_index')
  @Column()
  eventId: string;
}
