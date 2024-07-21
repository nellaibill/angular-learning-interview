import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  {
    path:'employee/:id',
    component:EmployeeDetailComponent
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path:'',
    redirectTo: 'employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
