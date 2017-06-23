import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { ICustomerInfoAdmin } from '../interface/ICustomerInfoAdmin';
import { BankService } from '../service/bank.service';
import { WindowService } from '../../shared/window.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: './bankWidgetCus.html',
    providers: [BankService, WindowService]
})
export class BankWidgetCusComponent implements OnInit {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo: iBankingInfo ;
    public customerInfo: ICustomerInfoAdmin;
    public policyNumber: string;
    public accountType: any[] = [
        {value: 'checking', display: 'Checking'},
        {value: 'saving', display: 'Saving'}
    ];
    public bankInfoForm: FormGroup;

    constructor(private  bankService: BankService, private windowService: WindowService, private router: Router, private fb: FormBuilder) {
        let parentController = windowService.nativeWindow.controller || windowService.nativeWindow.parent.controller || {customer : {applicationPolicy: {policyNumber: '1'}}};
        this.policyNumber ='110000001' || parentController.customer.applicationPolicy.policyNumber;

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

        this.bankInfoForm = fb.group({
            'accountType': [null, Validators.required],
            'routing_number': [null, Validators.required],
            'accountNumber': [null],
            'bankName': [null]
        });

    };

    submitForm(value: any){
        console.log(value);
    }

    ngOnInit() {
        this.bankService.getCustomerInfo_admin(this.policyNumber)
            .subscribe(customerInfo => {
                this.customerInfo = customerInfo;
            });
    }


    updateBankInfo() {
        this.bankService.postBankInfo(this.policyNumber, this.bankInfo)
            .subscribe(bankInfo => {
                this.router.navigate(['complete']);
                return true;
            });
    }
}



