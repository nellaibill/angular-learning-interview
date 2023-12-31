import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { UserInterface } from "../interfaces/UserInterface";

@Injectable()

export class UserService{

  constructor(private http:HttpClient){

  }

  getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>('https://reqres.in/api/unknown/23').pipe(
      catchError((error  :any)=> {
        console.log(error);
        return throwError(()=>error);
      })
    );
  }
}
