import { Component } from '@angular/core';
import { iBene } from './interfaces/bene.interface';
import { BeneListService } from './services/beneList.service';
import { BeneRelationService } from './services/beneRelation.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'bene-form',
    templateUrl: './bene-form.component.html',
    providers: [BeneListService, BeneRelationService]
})
export class BeneFormComponent {
    bene: iBene;
    isFullPercent: boolean;
    primaryRelationshipList: Array<any>;
    otherRelationshipList: Array<any>;
    constructor(private beneListService: BeneListService, private router: Router, private beneRelationService: BeneRelationService) {
        this.bene = {
            relationship: 1,
            otherRelationship: '',
            name: 'bene4',
            address: {
                line1: '1123 bell st',
                line2: '',
                city: 'new york',
                state: 'NY',
                zipCode: '11102'},
            phoneNumber: '9170902345',
            dateOfBirth: '09/09/1982',
            ssn: '088989876',
            perStirpes: true,
            percent: 40
        };
        this.primaryRelationshipList = this.beneRelationService.getOwnerInsuredRelations();
    }

    setPercentageFull() {
        this.bene.percent = this.isFullPercent ? 100 : 0;
    }

    addBeneToList(): void {
        this.beneListService.addBeneList(this.bene);
        this.router.navigate(['/list']);
    }

    getSelectedRelationOption() {
        let selectedOption: any;
        for(let i of this.beneRelationService.getOwnerInsuredRelations()) {
            if(i.code === this.bene.relationship) {
                selectedOption = i;
            }
        }
        this.otherRelationshipList = selectedOption.otherRelationships ? selectedOption.otherRelationships : null;
        this.bene.otherRelationship = null;

    }

    setCurrentBeneFullPercent() {
        this.bene.percent = 100;
    }
}
