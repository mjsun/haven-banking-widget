import { Component } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';


@Component({
    selector: 'bank-widget',
    templateUrl: 'app/banking/bank-form.component.html'
})
export class BankFormComponent {
    public pageTitle: string = 'Banking Form info';
    public accountholder: string;
}

