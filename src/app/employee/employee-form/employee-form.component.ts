import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { filter, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}
  employeeForm!: FormGroup;
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value.name);
      this.employeeForm.reset();
    }
  }

  test(): void {
    const numbers$ = of(1, 2, 3, 4, 5);

    // This will throw an error
    const transformedNumbers$ = numbers$.pipe(map((value) => value * 10));
    transformedNumbers$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });

    const transformedNumbers1$ = numbers$.pipe(
      filter((value) => value % 2 === 0)
    );
    transformedNumbers1$.subscribe((val) => console.log(val));

    const names$ = of('Hana', 'Abdullah');
    const mergedNames$=names$.pipe(mergeMap((name) => of(name + ' saleem')));
    mergedNames$.subscribe((val) => console.log("MergeMap : ",val));
  }
}
