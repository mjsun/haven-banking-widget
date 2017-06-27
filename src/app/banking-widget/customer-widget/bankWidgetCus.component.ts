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
    public displayError: any = {
        accountType: null,
        routing_number: null,
        accountNumber: null,
        bankName: null
    };
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
            'routing_number':  [null, Validators.required],
            'accountNumber': [null, Validators.required],
            'bankName': [, Validators.required]
        });

        // this.bankInfoForm.valueChanges.subscribe(data => {
        //     // console.log('Form changes', data.accountType);
        //
        //     if(data.accountType === null) {
        //         this.displayError.accountType = 'Please choose account type';
        //     }
        //     else {
        //         this.displayError.accountType = null;
        //     }
        //
        //     if(data.routing_number === null) {
        //         this.displayError.routing_number = 'Please input routing number';
        //     }
        //     else if(data.routing_number.toString().length !== 9) {
        //         // this.displayError.routing_number = 'Please input 9 digit routing number';
        //     }
        //     else if(!this.checkSum(data.routing_number)) {
        //         this.displayError.routing_number = 'Please input valid routing number';
        //     }
        //     else {
        //         this.displayError.routing_number = null;
        //     }
        //
        //     if(data.accountNumber === null) {
        //         this.displayError.accountNumber = 'Please input account number';
        //     }
        //     else {
        //         this.displayError.accountNumber = null;
        //     }
        //
        //
        //     if(data.bankName == null || data.bankName.replace(/\s/g, '') === '') {
        //         this.displayError.bankName = 'Please input account number';
        //     }
        //     else {
        //         this.displayError.bankName = null;
        //     }
        //
        // });

    };


    validateRoutingNumber() {
        let routingNumber = this.bankInfoForm.value['routing_number'];
        if(this.bankInfoForm.controls['routing_number'].dirty) {
            if(routingNumber === null || routingNumber.toString().length !== 9) {
                this.displayError.routing_number = 'Please enter 9 digits routing number.';
            }
            else if (!this.checkSum(routingNumber)) {
                this.displayError.routing_number = 'Please input valid routing number';
            }
            else {
                this.displayError.routing_number = null;
            }
        }
    }

    validateAccountNumber() {
        let accountNumber = this.bankInfoForm.value['accountNumber'];
        if(this.bankInfoForm.controls['accountNumber'].dirty) {
            if(accountNumber === null) {
                this.displayError.accountNumber = 'Please enter account number.'
            }
            else if(accountNumber.toString().length > 15) {
                this.displayError.accountNumber = 'Please enter maximum 15 digits.'
            }
            else {
                this.displayError.accountNumber = null;
            }
        }
    }

    validateBankName() {
        let bankName = this.bankInfoForm.value['bankName'];
        if(this.bankInfoForm.controls['bankName'].dirty) {
            if(bankName !== null && bankName.replace(/\s/g, '') === '') {
                this.displayError.bankName = 'Please enter account number.'
            }
            else {
                this.displayError.bankName = null;
            }
        }
    }

    enableSubmitButton() {
        for(let field in this.bankInfoForm.value) {
            if(this.bankInfoForm.value[field] === null || this.bankInfoForm.value[field] === '') {
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



