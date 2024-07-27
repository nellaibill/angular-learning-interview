import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  filterEmployees: any[] = [];
  selectedEmployeeId: any;
  recentAccesedEmployees:any[] = [];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = [...response];
      this.filterEmployees = response;
    });
  }
  viewEmployeeDetails(employee: any) {
    //this.router.navigate(['/employee', employee.id]);
    this.recentAccesedEmployees.push('parent'+employee.id);
    this.selectedEmployeeId = employee.id;
  }

  deleteEmployee(employeeId: number) {
    this.selectedEmployeeId = employeeId;
    this.employeeService.deleteEmployee(employeeId);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue == '') {
      this.filterEmployees = this.employees;
    }
    this.filterEmployees = this.filterEmployees.filter((emp) =>
      emp.name.includes(filterValue)
    );
  }
}
