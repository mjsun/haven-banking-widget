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
    status: EventEmitter<any> = new EventEmitter<any>();

    getStatus() {
        // this.status.emit(this.bene);
    }

    deleteBeneficiary() {
        this.status.emit(this.bene);
    }

}
