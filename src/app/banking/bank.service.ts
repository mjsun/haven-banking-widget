import { Injectable } from '@angular/core';
import { iBankingInfo } from '../interface/IBankingInfo';
import { BANKINFO } from './mock-bank';

@Injectable()
export class BankService {
    getBankInfo(policy: number): Promise<iBankingInfo> {
        let thisBankInfo = BANKINFO[policy];
        return Promise.resolve(thisBankInfo);
    }

}