import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bene-form',
    templateUrl: './bene-form.component.html'
})
export class BeneFormComponent {
     bene: any;

     constructor() {
         this.bene = {
             name: 'test',
             percent: 50
         };
     }
}
