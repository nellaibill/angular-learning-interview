import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { filter, map, mergeMap, Observable, of } from 'rxjs';
import { CanComponentDeactivate } from '../employee-deactivate.guard';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit, CanComponentDeactivate {
  constructor(private employeeService: EmployeeService) {}
  hasUnsavedChanges: boolean = true;
  userInput: string = '<script>alert("XSS Attack")</script><p>This is safe content.</p>';
  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm(
        'You have unsaved changes! Are you sure you want to leave?'
      );
    }
    return true;
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.hasUnsavedChanges) {
      $event.returnValue = true;
    }
  }
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
  learnWebWorker() {
    const worker = new Worker(
      new URL('./../employee-stats-worker.worker', import.meta.url),
      {
        type: 'module',
      }
    );

    worker.postMessage({ value: 10 });

    worker.onmessage = ({ data }) => {
      console.log('web-worker-output', data);
      worker.terminate();
    };
  }
  learnObservableOperators(): void {
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
    const mergedNames$ = names$.pipe(mergeMap((name) => of(name + ' saleem')));
    mergedNames$.subscribe((val) => console.log('MergeMap : ', val));
  }
}
