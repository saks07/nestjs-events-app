import { HttpStatus } from '@nestjs/common';
import { AxiosError, HttpStatusCode } from 'axios';

type Status = 'success' | 'fail';

type Ads = 'sure, why not!' | 'you shall not pass!';

export interface Geolocation {
  query: string;
  status: Status;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

export type GeolocationQuery = {
  fields: string;
};

export interface GeolocationResultError {
  message: string;
  error: HttpStatus;
  statusCode: HttpStatusCode;
}

export interface GeolocationResult<T> {
  message: string;
  data?: T;
  error?: HttpStatus;
  statusCode: number;
}

export type Fun7AdQuery = {
  countryCode: string;
};

interface Fun7AdError {
  message: string;
  error: AxiosError;
  statusCode: number;
}

export interface Fun7AdResult<T> {
  message: string;
  data?: T;
  error?: string;
  statusCode: number;
}

export interface Fun7Ad {
  ads: Ads;
}
