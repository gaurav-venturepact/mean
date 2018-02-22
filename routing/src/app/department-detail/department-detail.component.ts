import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: '<h2>Department Details selected id = {{ departmentId }} </h2>'
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.departmentId = id;
  }

}
