import {Injectable} from '@angular/core';
import {iBene} from '../interfaces/bene.interface';
import {BeneListService} from './beneList.service';

@Injectable()
export class AllocatorService {
    private static subTotal: number;

    constructor(private beneListService: BeneListService) {

    }

    getSubTotalPrimary() {
        let percentArr: Array<number> = this.beneListService.getBeneList().map(bene=>bene.percent);
        return percentArr.reduce((a, b) => a*1 + b*1, 0);
    }
    getSubTotalContingent() {
        let percentArr: Array<number> = this.beneListService.getBeneList().map(bene=>bene.percent);
        return percentArr.reduce((a, b) => a*1 + b*1, 0);
    }
}