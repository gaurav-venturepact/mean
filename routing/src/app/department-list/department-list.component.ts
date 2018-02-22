import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `<h2>Department List</h2>
            <ul>
              <li (click)="onSelect(department)" *ngFor="let department of departments">
              <span class="badge">{{ department.id}}</span> {{ department.name }}
              </li>
            </ul>
  `
})
export class DepartmentListComponent implements OnInit {

  constructor(private router: Router) {}
  
  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"}
  ]

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

  

  ngOnInit() {
  }

}
