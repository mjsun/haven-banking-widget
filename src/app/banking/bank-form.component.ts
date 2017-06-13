import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';

@Component({
    selector: 'bank-widget',
    templateUrl: 'app/banking/bank-form.component.html'
})
export class BankFormComponent implements OnInit {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo : iBankingInfo;

    ngOnInit()
    {
        this.bankInfo = {
            accountholder: 'kathryn',
            routingNumber: 93,
            accountNumber: 54,
            bankName: 'capital one',
            notes: 'change info'
        };
    }
}



