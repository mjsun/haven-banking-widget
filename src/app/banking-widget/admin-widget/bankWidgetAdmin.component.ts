import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { BankService } from '../service/bank.service';

@Component({
    moduleId: module.id,
    selector: 'bank-widget-admin',
    templateUrl: './bankWidgetAdmin.html',
    providers: [BankService]
})
export class BankWidgetAdminComponent implements OnInit {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo : iBankingInfo ;
    public policyId : string;
    public accountType: any[];
    public confirmRead: boolean;
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
        this.accountType = [
            {value: 'checking', display: 'Checking'},
            {value: 'saving', display: 'Saving'}
        ];
        
        this.confirmRead = false;
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



