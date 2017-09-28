import {Injectable} from '@angular/core';
import {iBene} from '../interfaces/bene.interface';

@Injectable()
export class BeneListService {
    private static beneList: Array<iBene> = [];
    private static currentBene: iBene;

    constructor() {
        BeneListService.beneList = BeneListService.beneList /*|| [{
            relationship: 'spouse',
            name: 'bene1',
            address: {
                line1: '123 bell st',
                line2: '',
                city: 'new york',
                state: 'NY',
                zipCode: '11102'},
            phoneNumber: '9170902345',
            date: '09/09/1982',
            ssn: '088989876',
            perStirpes: true,
            percent: 40
        },
        {
            relationship: 'spouse',
            name: 'bene2',
            address: {
                line1: '456 bell st',
                line2: '',
                city: 'new york',
                state: 'NY',
                zipCode: '11102'},
            phoneNumber: '9170902345',
            date: '09/09/1982',
            ssn: '088989876',
            perStirpes: true,
            percent: 30
        },
        {
            relationship: 'spouse',
            name: 'bene3',
            address: {
                line1: '789 bell st',
                line2: '',
                city: 'new york',
                state: 'NY',
                zipCode: '11102'},
            phoneNumber: '9170902345',
            date: '09/09/1982',
            ssn: '088989876',
            perStirpes: true,
            percent: 30
        }];  */
    } 

    getBeneList() {
        return BeneListService.beneList;
    }

    setCurrentBene(bene: iBene){
        BeneListService.currentBene = bene;
    }

    getCurrentBene(){
        return BeneListService.currentBene as iBene;
    }

    addBeneList(bene: iBene) {
        BeneListService.beneList.push(bene);
    }

    deleteFromBeneList(Bene: iBene) {
        let beneIndex: number = BeneListService.beneList.indexOf(Bene);
        BeneListService.beneList.splice(beneIndex, 1);
    }
}