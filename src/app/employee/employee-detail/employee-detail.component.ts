import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent implements OnChanges {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  employee: any;
  @Input() employeeId: any;
  @Input() recentAccesedEmployees: any[] = [];
  id = 0;

  ngOnChanges(changes: SimpleChanges): void {
    //this.id = +this.route.snapshot.params['id'];
    console.log('ngOnChanges-from-employee-detail');
    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((response: any) => (this.employee = response));
  }
  subscribeFromChild(): void {
    this.recentAccesedEmployees.push('child');
  }
}
