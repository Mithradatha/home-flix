import { ResourceResolver } from './../resource-resolver';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonConvert } from 'json2typescript';
import { Flix } from './flix.model';

@Injectable({
  providedIn: 'root'
})
export class FlixService {
  private resourceResolver = new ResourceResolver('flixes');
  private jsonConverter = new JsonConvert();

  constructor(private httpClient: HttpClient) {}

  getFlixes(): Observable<Flix[]> {
    const endpoint: string = this.resourceResolver.resolveEndpoint();

    return this.httpClient.get(endpoint).pipe(
      map(data => {
        return this.jsonConverter.deserialize(data, Flix);
      })
    );
  }
}
