import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { ICustomerInfoAdmin } from '../interface/ICustomerInfoAdmin';
import { BankService } from '../service/bank.service';
import { WindowService } from '../../shared/window.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './bankWidgetAdmin.html',
    providers: [BankService, WindowService]
})
export class BankWidgetAdminComponent implements OnInit {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo : iBankingInfo ;
    public customerInfo : ICustomerInfoAdmin ;
    public policyNumber : string;
    public accountType: any[];
    public confirmRead: boolean;
    constructor(private  bankService: BankService, private windowService: WindowService, private router: Router) {
        let parentController = windowService.nativeWindow.controller || windowService.nativeWindow.parent.controller || {customer : {applicationPolicy: {policyNumber: '1'}}};
        this.policyNumber = parentController.customer.applicationPolicy.policyNumber;

        this.customerInfo = {
            firstName: '',
            lastName: '',
            isPaymentOverDue: false,
            currentDate: new Date(),
            premiumAmt: 0.00,
            bankName: '',
            effectiveDate: new Date(),
            effectiveDay: '',
            helpLine: '',
            helpAddr: ''
        };

        this.bankInfo = {
            accountholder: '',
            accountType: 'checking',
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
        this.bankService.getCustomerInfo_admin(this.policyNumber)
            .subscribe(customerInfo => {
                this.customerInfo = customerInfo;
            });
    }

    updateBankInfo() {
         this.bankService.postBankInfo(this.policyNumber, this.bankInfo)
            .subscribe(bankInfo =>  this.router.navigate(['complete']));
    }
}



