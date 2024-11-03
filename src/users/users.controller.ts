import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  Fun7Ad,
  Fun7AdQuery,
  Fun7AdResult,
  GeolocationResult,
  GeolocationResultError,
  type GeolocationQuery,
} from './interfaces/user.interface';
import { AxiosError } from 'axios';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/geolocation')
  async geolocation(
    @Query() query: GeolocationQuery,
  ): Promise<GeolocationResult<Geolocation | null>> {
    try {
      const response = await this.usersService.geolocation(query);
      return { message: '', data: response.data, statusCode: response.status };
    } catch (err: unknown) {
      const geoError = err as GeolocationResultError;
      return {
        message: geoError.message,
        error: geoError.error,
        statusCode: geoError.statusCode,
      };
    }
  }

  @Get('/ads')
  async fun7AdData(
    @Query() query: Fun7AdQuery,
  ): Promise<Fun7AdResult<Fun7Ad | null>> {
    try {
      const response = await this.usersService.fun7AdData(query);
      return { message: '', data: response.data, statusCode: response.status };
    } catch (err: unknown) {
      const error = err as AxiosError;
      return {
        message: error.message,
        error: error.code,
        statusCode: error.status,
      };
    }
  }
}
