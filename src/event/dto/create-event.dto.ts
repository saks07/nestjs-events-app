import { EventType } from 'src/event/interfaces/event.interface';

export class CreateEventDto {
  name: string;
  description: string;
  type: EventType;
  priority: number;
}
