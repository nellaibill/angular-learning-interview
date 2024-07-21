import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-basic-concepts2',
  templateUrl: './basic-concepts2.component.html',
  styleUrls: ['./basic-concepts2.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [EmployeeService],
})
export class BasicConcepts2Component {
  constructor(private empl: EmployeeService) {

  }
  @Input() name: string | undefined;
  @Output() childChange = new EventEmitter<string>();
  courses: any;
  onChildClick(): void {
    this.childChange.emit('Data sent From Child');
  }
  loadCourses() {
    this.empl.getEmployees().subscribe((emp) => console.log(emp));
    this.courses = [
      { id: 1, name: 'Test1' },
      { id: 2, name: 'Test2' },
      { id: 3, name: 'Test1' },
    ];
  }
  trackByFunction(index: number, item: any): number {
    return item.id;
  }
}
