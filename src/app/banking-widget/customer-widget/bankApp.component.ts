import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'bank-widget-customer',
    template: `
        <div class="container">
          <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent{
    constructor(private router: Router) {
        this.router.navigate(['/']);
    }

}