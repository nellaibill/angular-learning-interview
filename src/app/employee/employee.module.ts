import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { EmployeeHighlightDirective } from './employee-highlight.directive';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { StringCapitalizePipe } from './string-capitalize.pipe';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeHighlightDirective,
    EmployeeDetailComponent,
    EmployeeFormComponent,
    StringCapitalizePipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [EmployeeListComponent, EmployeeDetailComponent],
  providers: [EmployeeService],
})
export class EmployeeModule {}
