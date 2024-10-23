import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EventType } from '../interfaces/event.interface';

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  public name: string;

  @Column({ type: 'text' })
  public description: string;

  @Column({
    type: 'enum',
    enum: EventType,
    enumName: 'eventy_type',
  })
  public type: EventType;

  @Column()
  public priority: number;
}
