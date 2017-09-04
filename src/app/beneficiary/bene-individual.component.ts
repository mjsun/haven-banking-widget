import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bene-individual',
    templateUrl: './bene-individual.component.html'
})
export class BeneIndividualComponent {
    @Input() bene: any;
}
