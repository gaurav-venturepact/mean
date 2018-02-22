import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
    {path:'departments', component: DepartmentListComponent},
    {path: 'employees',component: EmployeeListComponent},
    {path: 'departments/:id',component: DepartmentDetailComponent}    
  ];

  @NgModule({
      imports:[
          RouterModule.forRoot(routes)
      ],
      exports: [
          RouterModule
      ]
  })

  export class AppRoutingModule{}
  export const routingComponents = [DepartmentListComponent,EmployeeListComponent,DepartmentDetailComponent]