import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
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

  private apiUrl = 'https://reqres.in/ap/users?page=2';

  getUsers(): Observable<any[]> {
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
