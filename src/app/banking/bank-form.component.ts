import { Component, Input } from '@angular/core';

@Component({
    selector: 'bank-widget',
    templateUrl: 'app/banking/bank-form.component.html'
})
export class BankFormComponent {
    public pageTitle: string = 'Banking Form info';
}