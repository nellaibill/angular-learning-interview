import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { LoginComponent } from './login/login.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { CanDeactivateGuard } from './employee/employee-deactivate.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
  },
  {
    path: 'employeeform',
    component: EmployeeFormComponent,
    canDeactivate :[CanDeactivateGuard]
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
