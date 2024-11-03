import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventEntity } from './entities/event.entity';
import { EventResponse } from './interfaces/event.interface';
import { HttpStatusCode } from 'axios';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(
    @Body() createEventDto: CreateEventDto,
  ): Promise<EventResponse<EventEntity>> {
    const data = await this.eventService.createEvent(createEventDto);

    return {
      message: 'Event successfully created',
      data,
      statusCode: HttpStatusCode.Created,
    };
  }

  @Get()
  async findAll(): Promise<EventResponse<EventEntity[]>> {
    const data = await this.eventService.getAllEvents();

    return {
      message: 'Events found',
      data,
      statusCode: HttpStatusCode.Found,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EventResponse<EventEntity>> {
    const data = await this.eventService.getEventById(+id);

    return {
      message: 'Event found',
      data,
      statusCode: HttpStatusCode.Found,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<EventResponse<EventEntity>> {
    const data = await this.eventService.updateEvent(+id, updateEventDto);

    return {
      message: 'Event successfully updated',
      data,
      statusCode: HttpStatusCode.Ok,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<EventResponse<EventEntity>> {
    const data = await this.eventService.deleteEvent(+id);

    return {
      message: 'Event successfully deleted',
      data,
      statusCode: HttpStatusCode.Ok,
    };
  }
}
