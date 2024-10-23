import { HttpStatus } from '@nestjs/common';
import { HttpStatusCode } from 'axios';

export enum EventType {
  CROSSPROMO = 'crosspromo',
  LIVEOPS = 'liveops',
  APP = 'app',
  ADS = 'ads',
}

export interface EventResponse<T> {
  data?: T;
  message: string;
  error?: HttpStatus;
  statusCode: HttpStatusCode;
}
