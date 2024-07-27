import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  forkJoin,
  interval,
  map,
  Observable,
  of,
  retry,
  switchMap,
  takeWhile,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
//import { Employee } from './Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {
    this.getEmployees();
  }

  private employeeSubject = new BehaviorSubject<{ id: number; name: string }[]>(
    [{ id: 1000, name: 'John Doe' }]
  );
  private baseUrl = 'https://reqres.i/api/users/';

  combinedResult: any[] = [];
  public employee$ = this.employeeSubject.asObservable();
  private currentId = 1001; // Start ID
  getEmployees(): Observable<{ id: number; name: string }[]> {
    this.getUsers().subscribe((employees) => {
      console.log(employees);
    });
    return this.employee$;
  }
  addEmployee(name: string) {
    const employees = this.employeeSubject.value;
    console.log('addEmployee:', employees);
    const newEmployee = { id: this.currentId++, name: name };
    this.employeeSubject.next([...employees, newEmployee]);
  }
  deleteEmployee(id: number) {
    const employees = this.employeeSubject.value;
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      this.employeeSubject.next([...employees]);
    }
  }
  getEmployeeById(id: number): Observable<any> {
    const employees = this.employeeSubject.value;
    const employee = employees.find((employee) => employee.id === id);
    return of(employee);
  }

  private apiUrl = environment.apiUrl;


  getUsers(): Observable<any> {
        return this.http.get<any>(this.baseUrl).pipe(
          retry(2),
          map((response) => response.data),
          catchError(error => of([console.log(error)])) // Access the 'data' property if needed
        );

  }
  getUserswithIntervals(): Observable<any> {
    let userId = 1;

    return interval(5).pipe(
      takeWhile(() => userId <= 5),
      switchMap(() => {
        const apiUrl = `${this.baseUrl}${userId++}`;
        return this.http.get<any>(apiUrl).pipe(
          map((response) => response.data) // Access the 'data' property if needed
        );
      })
    );
  }
  getUsersForkJoin(): Observable<any[]> {
    const api1 = this.http.get<any>('https://reqres.in/api/users?page=1').pipe(
      map((response) => response.data) // Access the 'data' property
    );
    const api2 = this.http.get<any>('https://reqres.in/api/users?page=2').pipe(
      map((response) => response.data) // Access the 'data' property
    );

    forkJoin(api1, api2).subscribe((res) => {
      this.combinedResult = [...res[0], ...res[1]];
    });
    return of(this.combinedResult);
  }
  getUsersWithTapCatchError(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((users) => console.log(users)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
}

/*
  private apiUrl =
    'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
  private employeeSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  public employee$ = this.employeeSubject.asObservable();
  private employees: any[] = [];
  getEmployees(): Observable<any[]> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(tap((employees) => this.employeeSubject.next(employees)));
  }

  getEmployeeById(id: number): Observable<any> {
    return this.employee$.pipe(
      map((employees) => {
        employees.find((employee) => employee.id === id);
      })
    );
  }*/
