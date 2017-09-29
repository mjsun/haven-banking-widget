import { Component, OnInit } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
import { ICustomerInfoAdmin } from '../interface/ICustomerInfoAdmin';
import { BankService } from '../service/bank.service';
import { WindowService } from '../../shared/window.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


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
    public accountTypeList: string[] = ['Checking','Savings','Business Checking','Business Savings'];
    public confirmRead: boolean;
    public bankInfoForm: FormGroup;
    public displayError: any = {
        accountType: null,
        routing_number: null,
        accountNumber: null,
        bankName: null
    };
    constructor(private  bankService: BankService, private windowService: WindowService, private router: Router, private fb: FormBuilder) {
        let parentController = windowService.nativeWindow.controller || windowService.nativeWindow.parent.controller || {customer : {applicationPolicy: {policyNumber: '110000001'}}};
        this.policyNumber = parentController.customer.applicationPolicy.policyNumber;

        this.customerInfo = {
            accountHolder: '',
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
            notes: ''
        };
        
        this.confirmRead = false;

        this.bankInfoForm = fb.group({
            'accountType': [''],
            'routingNumber':  [''],
            'accountNumber': [''],
            'notes': [''],
            'confirmRead': ['']
        });
    }

    checkNumber(str: string) {
        if(str !== null && str.length > 0) {
            for(let i of str) {
                if (i.match(/\D/)) {
                    console.log(i);
                    return false;
                }
            }
        }
        return true;
    }

    validateRoutingNumber() {
        let routingNumber = this.bankInfoForm.value['routingNumber'];
        if(this.bankInfoForm.controls['routingNumber'].dirty) {
            if (routingNumber === null || routingNumber.length !== 9) {
                this.displayError.routing_number = 'Please enter 9 digit Routing Number.';
            }
            else if (!this.checkNumber(routingNumber) || !this.checkSum(routingNumber)) {
                this.displayError.routing_number = 'Invalid Routing Number.';
            }
            else {
                this.displayError.routing_number = null;
            }
        }
    }

    validateAccountNumber() {
        let accountNumber = this.bankInfoForm.value['accountNumber'];
        if(this.bankInfoForm.controls['accountNumber'].dirty) {
            if(accountNumber === null || accountNumber.length === 0) {
                this.displayError.accountNumber = 'Please enter Account Number.'
            }
            else if (!this.checkNumber(accountNumber)) {
                this.displayError.accountNumber = 'Invalid Account Number.';
            }
            else {
                this.displayError.accountNumber = null;
            }
        }
    }

    enableSubmitButton() {
        for(let field in this.bankInfoForm.value) {
            if( field === 'notes') {
                continue;
            }
            if(this.bankInfoForm.value[field] === null || this.bankInfoForm.value[field].length === 0) {
                return false;
            }
        }

        for(let field in this.displayError) {
            if(this.displayError[field] !== null) {
                return false;
            }
        }

        return true;
    }

    checkSum(routing: number) {
        let routingArr = routing.toString().split('');
        let res: number = 0;
        for(let i = 0; i < 9; i++) {
            let currNumber = Number(routingArr[i]);
            if(i === 0 || i === 3 || i === 6) {
                res += currNumber * 3;
            }
            if(i === 1 || i === 4 || i === 7) {
                res += currNumber * 7;
            }
            if(i === 2 || i === 5 || i === 8) {
                res += currNumber * 1;
            }
        }
        return (res % 10) ? false : true
    }

    ngOnInit()
    {
        this.bankService.getCustomerInfo_admin(this.policyNumber)
            .subscribe(customerInfo => {
                this.customerInfo = customerInfo;
            });
    }

    updateBankInfo() {
        for(let key in this.bankInfo) {
            this.bankInfo[key] = this.bankInfoForm.value[key];
        }
        this.bankService.postBankInfo(this.policyNumber, this.bankInfo)
            .subscribe(bankInfo => {
                this.router.navigate(['complete']);
            });
    }
}



