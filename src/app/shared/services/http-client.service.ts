import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpClientService extends RequestOptions {

  constructor(private requestOptionArgs: RequestOptions) {
    super();
  }

  addHeader(headerName: string, headerValue: string ){
      (this.requestOptionArgs.headers as Headers).set(headerName, headerValue);
  }
}