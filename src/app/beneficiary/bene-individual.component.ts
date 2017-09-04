import { Component, Input , Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bene-individual',
    templateUrl: './bene-individual.component.html'
})
export class BeneIndividualComponent {
    @Input()
    bene: any;

    @Output()
    isDelBene: EventEmitter<any> = new EventEmitter<any>();

    deleteBeneficiary() {
        this.isDelBene.emit(this.bene);
    }

}
