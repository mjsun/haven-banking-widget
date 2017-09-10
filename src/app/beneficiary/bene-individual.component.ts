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

    @Output()
    percent: EventEmitter<number> = new EventEmitter<number>();

    deleteBeneficiary() {
        this.isDelBene.emit(this.bene);
    }

    setBene() {
        this.percent.emit(this.bene);
    }

    updatePercent() {
        this.percent.emit(this.bene);
    }

}
