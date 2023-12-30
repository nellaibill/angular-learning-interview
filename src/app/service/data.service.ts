import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError, Observable, catchError, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.url).pipe(
      map((response: any) => {
        response;
      })
    );
  }
  create(resource: any) {
    return this.httpClient.post(this.url, JSON.stringify(resource));
  }
  update(resource: any) {
    return this.httpClient.patch(
      this.url + '/' + resource.id,
      JSON.stringify({ title: 'test' })
    );
  }
  delete(id: any) {
    return this.httpClient.delete(this.url + '/' + id).pipe(
      catchError((error) => {
        if (error.status === 404) return throwError(new NotFoundError(error));
        console.log(error);
        return throwError(new AppError(error));
      })
    );
  }
}
