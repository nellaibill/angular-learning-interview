import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError, Observable, catchError, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root',
})
export class PostService extends DataService{
  //private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

}
