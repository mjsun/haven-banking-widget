import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { iBankingInfo } from '../interface/IBankingInfo';
import { ICustomerInfoAdmin } from '../interface/ICustomerInfoAdmin';

@Injectable()
export class BankService {
    private _rootEntryUrl = 'http://localhost:1375';

    constructor(private _http: Http) {}

    getBankInfo(policyId: string): Observable<iBankingInfo> {
        return this._http.get(this._rootEntryUrl + '/banking_info/' + policyId)
            .map((response: Response) => <iBankingInfo> response.json());
    }

    getCustomerInfo_admin(policyNumber: string): Observable<ICustomerInfoAdmin> {
        return this._http.get(this._rootEntryUrl + '/customer_info/' + policyNumber)
            .map((response: Response) => <ICustomerInfoAdmin> response.json());
    }

    postBankInfo(policyId: string, bankInfo: iBankingInfo): Observable<iBankingInfo> {
        return this._http.put(this._rootEntryUrl + '/banking_info/' + policyId, bankInfo)
            .map((response: Response) => <iBankingInfo> response.json());
    }
}