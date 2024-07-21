import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnChanges {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  employee: any;
  @Input() employeeId: any;
  id = 0;

  ngOnChanges(changes: SimpleChanges): void {
    //this.id = +this.route.snapshot.params['id'];

    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((response: any) => (this.employee = response));
  }
}
