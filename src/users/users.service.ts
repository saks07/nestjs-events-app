import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import {
  Fun7Ad,
  Fun7AdQuery,
  GeolocationQuery,
} from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async geolocation(
    query?: GeolocationQuery,
  ): Promise<AxiosResponse<Geolocation>> {
    let url = 'http://ip-api.com/json';
    if (query?.fields) {
      url = `${url}/?fields=${query.fields}`;
    }
    return this.httpService.axiosRef.get(url);
  }

  fun7AdData(query: Fun7AdQuery): Promise<AxiosResponse<Fun7Ad>> {
    return this.httpService.axiosRef.get(
      this.configService.get<string>('FUN7_API_URL'),
      {
        params: {
          ...query,
        },
        auth: {
          username: this.configService.get<string>('FUN7_API_USERNAME'),
          password: this.configService.get<string>('FUN7_API_PASSWORD'),
        },
      },
    );
  }
}
