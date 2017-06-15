import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { BankService } from '../service/bank.service';

@Component({
    moduleId: module.id,
    selector: 'bank-widget-customer',
    templateUrl: './bankWidgetCus.html',
    providers: [BankService]
})
export class BankWidgetCusComponent implements OnInit {
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


