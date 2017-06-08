<<<<<<< HEAD
import { Component } from '@angular/core';
import { iBankingInfo } from '../interface/iBankingInfo';
=======
import { Component, Input } from '@angular/core';
>>>>>>> d3ae93f0b1de3dc1f90632d72b16d191c1a729a6

@Component({
    selector: 'bank-widget',
    templateUrl: 'app/banking/bank-form.component.html'
})
export class BankFormComponent {
    public pageTitle: string = 'Banking Form info';
}

