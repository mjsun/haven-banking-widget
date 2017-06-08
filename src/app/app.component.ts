import { Component } from '@angular/core';
import { iBankingInfo } from './interface/iBankingInfo';

@Component({
    selector: 'haven-banking-widget',
    template: `
        <div class='container'>
            <router-outlet></router-outlet> 
        </div>
     `
})
export class AppComponent {
    
}
