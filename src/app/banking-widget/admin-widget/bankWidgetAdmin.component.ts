import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { BankService } from '../service/bank.service';
import { WindowService } from '../../shared/window.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'bank-widget-admin',
    templateUrl: './bankWidgetAdmin.html',
    providers: [BankService, WindowService]
})
export class BankWidgetAdminComponent implements OnInit {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo : iBankingInfo ;
    public policyNumber : string;
    public accountType: any[];
    public confirmRead: boolean;
    constructor(private  bankService: BankService, private windowService: WindowService, private router: Router) {
        let parentController = windowService.nativeWindow.controller || windowService.nativeWindow.parent.controller;
        this.policyNumber = parentController.customer.applicationPolicy.policyNumber;
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
        this.bankService.getBankInfo(this.policyNumber)
            .subscribe(bankInfo => this.bankInfo = bankInfo);
    }

    updateBankInfo() {
         this.bankService.postBankInfo(this.policyNumber, this.bankInfo)
            .subscribe(bankInfo =>  this.router.navigate(['complete']));
    }
}



