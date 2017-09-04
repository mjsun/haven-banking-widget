import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bene-list',
    templateUrl: './bene-list.component.html'
})
export class BeneListComponent {
    beneList: any [];
    currentBene: any;
    constructor() {
        this.beneList = [
                {name: 'Jack Young'},
                {name: 'Baek Mak'},
                {name: 'Liy Alle'}
            ];
        this.currentBene = {};
    }

    statusChange(event: any) {
        // console.log(event);
        this.currentBene = event;
    }

    delete(bene: any) {
        let beneIndex = this.beneList.indexOf(bene);
        this.beneList.splice(beneIndex, 1);
    }
}
