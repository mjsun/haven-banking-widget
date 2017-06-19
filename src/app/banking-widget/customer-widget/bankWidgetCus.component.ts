import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { BankService } from '../service/bank.service';
import { WindowService } from '../../shared/window.service';

@Component({
    moduleId: module.id,
    selector: 'bank-widget-customer',
    templateUrl: './bankWidgetCus.html',
    providers: [BankService, WindowService]
})
export class BankWidgetCusComponent implements OnInit {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo : iBankingInfo ;
    public policyNumber : string;
    public accountType: any[] = [
        {value: 'checking', display: 'Checking'},
        {value: 'saving', display: 'Saving'}
    ];
    constructor(private  bankService: BankService, private windowService: WindowService) {
        this.policyNumber = windowService.nativeWindow.parent.controller.customer.applicationPolicy.policyNumber;
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
        this.bankService.getBankInfo(this.policyNumber)
            .subscribe(bankInfo => this.bankInfo = bankInfo);
    }

    updateBankInfo() {
         this.bankService.postBankInfo(this.policyNumber, this.bankInfo)
            .subscribe(bankInfo => console.log(bankInfo));
    }
}



