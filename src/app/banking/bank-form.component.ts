import { Component } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';


@Component({
    moduleId: module.id,
    selector: 'bank-widget',
    templateUrl: './bank-form.component.html'
})
export class BankFormComponent {
    public pageTitle: string = 'Banking Form info';
    public accountholder: string;
}

