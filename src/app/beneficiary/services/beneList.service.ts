import {Injectable} from '@angular/core';
import {iBene} from '../interfaces/bene.interface';

@Injectable()
export class BeneListService {
    private static primaryBeneList: Array<iBene> = [];
    private static contingentBeneList: Array<iBene> = [];
    private static currentBene: iBene;

    constructor() {
        BeneListService.primaryBeneList = BeneListService.primaryBeneList; /*|| [{
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

    getPrimaryBeneList() {
        return BeneListService.primaryBeneList;
    }

    getContingentBeneList() {
        return BeneListService.contingentBeneList;
    }

    setCurrentBene(bene: iBene){
        BeneListService.currentBene = bene;
    }

    getCurrentBene(){
        return BeneListService.currentBene as iBene;
    }

    addBeneList(bene: iBene, type: string) {
        if(type === 'Primary'){
            BeneListService.primaryBeneList.push(bene);
        }
        else {
            BeneListService.contingentBeneList.push(bene);
        }
    }

    deleteFromBeneList(Bene: iBene, type: string) {
        if(type === 'Priamry'){
            let beneIndex: number = BeneListService.primaryBeneList.indexOf(Bene);
            BeneListService.primaryBeneList.splice(beneIndex, 1);
        }
        else {
            let beneIndex: number = BeneListService.contingentBeneList.indexOf(Bene);
            BeneListService.contingentBeneList.splice(beneIndex, 1);
        }
    }
}