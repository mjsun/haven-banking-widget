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
    constructor(private  bankService: BankService) {   
        this.bankInfo = {
            accountholder: '',
            routingNumber: 0,
            accountNumber: 0,
            bankName: '',
            notes: ''
        }; 
      
    }

    ngOnInit()
    {
        
        this.bankService.getBankInfo(2).then(bankInfo => this.bankInfo = bankInfo);

    

    }
}



