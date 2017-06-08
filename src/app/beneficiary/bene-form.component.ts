import { Component, Input } from '@angular/core';

@Component({
    selector: 'bene-widget',
    templateUrl: 'app/beneficiary/bene-form.component.html'
})
export class BeneFormComponent {
      @Input()name: string;  
}