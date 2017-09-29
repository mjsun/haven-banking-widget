import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bene-widget',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private router: Router) {
        this.router.navigate(['/']);
    }

}