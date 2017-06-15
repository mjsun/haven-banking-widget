import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { BankService } from './bank.service';

@Component({
    moduleId: module.id,
    selector: 'bank-widget',
    templateUrl: './bank-form.component.html',
    providers: [BankService]
})
export class BankFormComponent implements OnInit {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo : iBankingInfo ;
    public policyId : string;
    public accountType: any[] = [
        {value: 'checking', display: 'Checking'},
        {value: 'saving', display: 'Saving'}
    ];
    constructor(private  bankService: BankService) {
        this.policyId = '110000005'
        this.bankInfo = {
            accountholder: '',
            accountType: '',
            routingNumber: '',
            accountNumber: '',
            bankName: '',
            notes: ''
        }; 
    }

    ngOnInit()
    {
        this.bankService.getBankInfo(this.policyId)
            .subscribe(bankInfo => this.bankInfo = bankInfo);
    }

    updateBankInfo() {
         this.bankService.postBankInfo(this.policyId, this.bankInfo)
            .subscribe(bankInfo => console.log(bankInfo));
    }
}



