
import { iBene } from '../../interfaces/bene.interface';
import { BeneListService } from '../../services/beneList.service';
import { BeneRelationService } from '../../services/beneRelation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Component, Input, OnChanges } from '@angular/core';
import { ValidationService } from '../../services/validation.service';


@Component({
    selector: 'bene-form',
    templateUrl: './bene-form.component.html',
    providers: [BeneListService, BeneRelationService]
})
export class BeneFormComponent {
    bene: iBene;
    primaryRelationshipList: Array<any>;
    otherRelationshipList: Array<any>;
    beneForm: FormGroup;
    person : boolean;
    children : boolean;
    certainChildren: boolean;
    other: boolean;
    otherTrust: boolean;
    specificChildren: boolean;
    relationship: any;
    type: string;

    constructor(private beneListService: BeneListService, private router: Router, private activatedRouter: ActivatedRoute , private beneRelationService: BeneRelationService, private fb: FormBuilder) {
       // if (this.beneListService.getCurrentBene) {
       //     this.bene  = this.beneListService.getCurrentBene();
       // }
       // else {
            this.bene = {
                relationship: 1,
                otherRelationship: '',
                name: '',
                address: {
                    line1: '',
                    line2: '',
                    city: '',
                    state: '',
                    zipCode: ''
                },
                phoneNumber: '',
                date: '',
                ssn: '',
                perStirpes: true,
                percent: 40,
                type: this.type
            };
       // }
       this.person = false;
        this.primaryRelationshipList = this.beneRelationService.getOwnerInsuredRelations();
        this.createForm();
    }

    createForm() {
        this.beneForm = this.fb.group({
            relationship: [this.primaryRelationshipList[0].description],
            otherRelationship: [''],
            childrenType: [''],
            certainMarriage: [''],
            name: [this.bene.name, Validators.required],
            line1: [this.bene.address.line1, Validators.required],
            line2: [this.bene.address.line2],
            city: [this.bene.address.city, Validators.required],
            state: [this.bene.address.state, Validators.required],
            zip: [this.bene.address.zipCode, [Validators.required, ValidationService.zipValidator]],
            phone: [this.bene.phoneNumber, [Validators.required, ValidationService.phoneValidator]],
            birthday: [this.bene.date, Validators.required],
            trustDate: [''],
            ssn: [this.bene.ssn, [Validators.required, ValidationService.ssnValidator]],
            govtId: [''],
            ssnTin: ['ssn'],            
            perStirpe: ['perstirpeYes', Validators.required],
            bene100: ['bene100Yes', Validators.required],
            percent: ['', [Validators.required, ValidationService.percentValidator]]
        });
    }

    setPercentageFull() {
        if(this.beneForm.get('percent').value != ""){
            this.bene.percent = this.beneForm.get('percent').value;
        }
        else {
            this.bene.percent = this.beneForm.get('bene100').value == 'bene100Yes' ? 100 : 0;
        }
    }

    editBene(bene: iBene) {
        this.bene = bene;
        this.createForm();
    }

    addBeneToList(): void {
        this.bene = {
            relationship: this.beneForm.get('relationship').value,
            otherRelationship: this.beneForm.get('otherRelationship').value,
            certainMarriage: this.beneForm.get('certainMarriage').value,
            name: this.beneForm.get('name').value != '' ? this.beneForm.get('name').value : this.relationship,
            address: {
                line1: this.beneForm.get('line1').value,
                line2: this.beneForm.get('line2').value,
                city: this.beneForm.get('city').value,
                state: this.beneForm.get('state').value,
                zipCode: this.beneForm.get('zip').value
            },
            phoneNumber: this.beneForm.get('phone').value,
            date: this.beneForm.get('birthday').value ? this.beneForm.get('birthday').value : this.beneForm.get('trustDate').value,
            ssn: this.beneForm.get('ssn').value,
            perStirpes: this.beneForm.get('perStirpe').value == "perstirpeYes" ? true : false,
            percent: 0,
            type: this.type
        };
        this.setPercentageFull();
        this.beneListService.addBeneList(this.bene, this.type);
        this.router.navigate(['/list']);
    }

    getSelectedRelationOption() {

        let selectedOption: any;
        for (let i of this.beneRelationService.getOwnerInsuredRelations()) {
            if (i.code === this.beneForm.get('relationship').value) {
                selectedOption = i;
                this.relationship = i.description;
            }
        }
        this.otherRelationshipList = selectedOption.otherRelationships ? selectedOption.otherRelationships : null;
       
        this.person = false;
        this.children = false;
        this.other = false;
        this.otherTrust = false;
        this.specificChildren = false;
        switch (selectedOption.code) {
            case 1:{
                this.person = true;
                break;
            }
            case 2:{
                this.person = true;
                this.children = true;
                break;
            }
            case 3: {
                this.person = true;
                break;
            }
            case 4:
            case 5: {
                this.other = true;
                break;
            }
            case 6: {
                this.otherTrust = true;
                break;
            }
        }
        this.bene.otherRelationship = null;

    }
    
    getSelectedChildOption(){
        //here we pop up that text box to get the thing
        if(this.beneForm.get('childrenType').value == "all"){
            this.specificChildren = false;
        }
        else {
            this.specificChildren = true;
        }
    }

    setCurrentBeneFullPercent() {
        this.bene.percent = 100;
    }

    ngOnInit() {
        this.type = this.activatedRouter.snapshot.data['type'];
        console.log("Data via params: ",this.activatedRouter.snapshot.data['type']);
        console.log("Data via params: ",this.activatedRouter.snapshot.data);
      }
}
