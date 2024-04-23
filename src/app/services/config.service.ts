import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  token: string;
  baseUrl: string | undefined;

  constructor(private httpClient: HttpClient) {
    this.token = '';
  }

  setUrl(route: string): string {
    return this.baseUrl + route;
  }

  createAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
    headers.append('Content-Type', 'application/json; charset=utf-8')
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  get(
    route: string,
    params: any = null,
    responseType: any = 'json'
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.httpClient.get(this.setUrl(route), {
      headers,
      observe: 'response',
      responseType,
      params,
    });
  }

  post(
    route: string,
    model: any
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.httpClient.post(this.setUrl(route), model, {
      headers,
    });
  }

  put(
    route: string,
    model: any
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.httpClient.put(this.setUrl(route), model, {
      headers,
    });
  }

  delete(
    route: string,
    model: any
  ): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.httpClient.delete(this.setUrl(route), {
      headers,
      body: model,
    });
  }
}
