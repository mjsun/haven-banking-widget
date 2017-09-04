import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'bene-widget',
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    constructor(private router: Router) {
        this.router.navigate(['/']);
    }

}