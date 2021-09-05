import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

@Entity('stripeEvent')
export class StripeEventEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Index('event_id_index')
  @Column({ name: 'event_id' })
  eventId: string;
}
