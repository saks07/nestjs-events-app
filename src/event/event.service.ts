import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private eventRepository: Repository<EventEntity>,
  ) {}

  async getAllEvents(): Promise<EventEntity[]> {
    const events = await this.eventRepository.find();
    return events;
  }

  async getEventById(id: number): Promise<EventEntity> {
    const event = await this.eventRepository.findOne({
      where: {
        id,
      },
    });

    if (!event) {
      throw new NotFoundException();
    }

    return event;
  }

  async createEvent(createEventDto: CreateEventDto): Promise<EventEntity> {
    const newEvent = await this.eventRepository.create(createEventDto);
    await this.eventRepository.save(newEvent);

    return newEvent;
  }

  async updateEvent(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<EventEntity> {
    const updateEvent = await this.eventRepository.findOne({ where: { id } });
    if (!updateEvent) {
      throw new NotFoundException('Could not find the event');
    }

    const eventData = this.eventRepository.merge(updateEvent, updateEventDto);
    const updatedEvent = await this.eventRepository.save(eventData);

    return updatedEvent;
  }

  async deleteEvent(id: number): Promise<EventEntity> {
    const existingEvent = await this.eventRepository.findOne({ where: { id } });
    if (!existingEvent) {
      throw new NotFoundException('Could not find the event');
    }

    const deleteEvent = await this.eventRepository.remove(existingEvent);

    return deleteEvent;
  }
}
