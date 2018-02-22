import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Routing Application</h1>
            <a routerLink="/departments" routerLinkActive="active">Departments</a>
            <a routerLink="/employees" routerLinkActive="active">Employees</a>
            <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
