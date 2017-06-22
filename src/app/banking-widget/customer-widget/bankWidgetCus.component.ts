import { Component, AfterViewChecked, OnInit, ViewChild } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { ICustomerInfoAdmin } from '../interface/ICustomerInfoAdmin';
import { BankService } from '../service/bank.service';
import { WindowService } from '../../shared/window.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: './bankWidgetCus.html',
    providers: [BankService, WindowService]
})
export class BankWidgetCusComponent implements OnInit, AfterViewChecked {
    public pageTitle: string = 'Banking Form Info';
    public bankInfo: iBankingInfo ;
    public customerInfo: ICustomerInfoAdmin;
    public policyNumber: string;
    public accountType: any[] = [
        {value: 'checking', display: 'Checking'},
        {value: 'saving', display: 'Saving'}
    ];
    heroForm: NgForm;
    @ViewChild('heroForm') currentForm: NgForm;

    constructor(private  bankService: BankService, private windowService: WindowService, private router: Router) {
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
    };

    ngOnInit() {
        this.bankService.getCustomerInfo_admin(this.policyNumber)
            .subscribe(customerInfo => {
                this.customerInfo = customerInfo;
            });
    }

    ngAfterViewChecked() {
        // this.formChanged();
        // alert('test');
    }
    //
    // formChanged() {
    //     if (this.currentForm === this.heroForm) { return; }
    //     this.heroForm = this.currentForm;
    //     if (this.heroForm) {
    //         this.heroForm.valueChanges
    //             .subscribe(data => this.onValueChanged(data));
    //     }
    // }
    //
    // onValueChanged(data?: any) {
    //     if (!this.heroForm) { return; }
    //     const form = this.heroForm.form;
    //
    //     for (const field in this.formErrors) {
    //         // clear previous error message (if any)
    //         this.formErrors[field] = '';
    //         const control = form.get(field);
    //
    //         if (control && control.dirty && !control.valid) {
    //             const messages = this.validationMessages[field];
    //             for (const key in control.errors) {
    //                 this.formErrors[field] += messages[key] + ' ';
    //             }
    //         }
    //     }
    // }
    //
    // formErrors = {
    //     'name': '',
    //     'power': ''
    // };
    //
    // validationMessages = {
    //     'name': {
    //         'required':      'Name is required.',
    //         'minlength':     'Name must be at least 4 characters long.',
    //         'maxlength':     'Name cannot be more than 24 characters long.',
    //         'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    //     },
    //     'power': {
    //         'required': 'Power is required.'
    //     }
    // };

    updateBankInfo() {
        this.bankService.postBankInfo(this.policyNumber, this.bankInfo)
            .subscribe(bankInfo => {
                this.router.navigate(['complete']);
                return true;
            });
    }
}



