import {Injectable} from '@angular/core';


@Injectable()
export class BeneRelationService {
    private static primaryRelation: number;
    private static secondaryRelation: number;

    getOwnerInsuredRelations () {
        return [
            {code: 1, description: 'Your spouse or partner, fiance', otherRelationships: null},
            {code: 2, description: 'Your Children', otherRelationships: null},
            {code: 3, description: 'Other Named Individuals', otherRelationships: this.getSecondaryRelation()},
            {code: 4, description: 'Your Estate', otherRelationships: null},
            {code: 5, description: 'A trust under your will', otherRelationships: null},
            {code: 6, description: 'Other trust', otherRelationships: null}
        ]
    }

    getOwnerNotInsuredRelation(insuredName: string) {
        return [
            {code: 1, description: 'Your spouse or partner', otherRelationships: null},
            {code: 2, description: `${insuredName}'s Children`, otherRelationships: null},
            {code: 3, description: 'Other Named Individuals', otherRelationships: this.getSecondaryRelation()},
            {code: 4, description: `${insuredName}'s Estate`, otherRelationships: null},
            {code: 5, description: `A trust under ${insuredName}`, otherRelationships: null}
        ]
    }

    getSecondaryRelation() {
        return [
            {code: 'Aunt:', description: 'Aunt'},
            {code: 'Brother:', description: 'Brother'},
            {code: 'Brother-in-law:', description: 'Brother-in-law'},
            {code: 'Business_Partner/Associate:', description: 'Business Partner/Associate'},
            {code: 'Daughter:', description: 'Daughter'},
            {code: 'Ex-Husband:', description: 'Ex-Husband'},
            {code: 'Ex-Wife:', description: 'Ex-Wife'},
            {code: 'Father:', description: 'Father'},
            {code: 'Granddaughter:', description: 'Granddaughter'},
            {code: 'Grandfather:', description: 'Grandfather'},
            {code: 'Grandmother:', description: 'Grandmother'},
            {code: 'Grandson:', description: 'Grandson'},
            {code: 'Husband:', description: 'Husband'},
            {code: 'Mother:', description: 'Mother'},
            {code: 'Nephew:', description: 'Nephew'},
            {code: 'Niece:', description: 'Niece'},
            {code: 'Significant_Other:', description: 'Significant Other'},
            {code: 'Sister:', description: 'Sister'},
            {code: 'Sister-in-law:', description: 'Sister-in-law'},
            {code: 'Son:', description: 'Son'},
            {code: 'Spouse:', description: 'Spouse'},
            {code: 'Uncle:', description: 'Uncle'},
            {code: 'Wife:', description: 'Wife'}
        ]
    }

}
