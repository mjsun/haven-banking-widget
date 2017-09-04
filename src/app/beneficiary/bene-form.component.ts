import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bene-form',
    templateUrl: './bene-form.component.html'
})
export class BeneFormComponent {
      @Input() name: string;
}
