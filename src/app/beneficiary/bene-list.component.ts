import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'bene-list',
    templateUrl: './bene-list.component.html'
})
export class BeneListComponent {
    beneList: any [];
    currentBene: any;
    constructor(private route: ActivatedRoute) {
        this.beneList = [
                {name: 'Jack Young'},
                {name: 'Baek Mak'},
                {name: 'Liy Alle'}
            ];
        this.currentBene = {};
    }

    delete(bene: any) {
        let beneIndex = this.beneList.indexOf(bene);
        this.beneList.splice(beneIndex, 1);
    }

    updatePercent(bene: any) {
        this.currentBene = bene;
    }

}
