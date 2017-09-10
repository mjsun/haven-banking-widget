import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iBene } from './interfaces/bene.interface';
import { BeneListService } from './services/beneList.service';
import { AllocatorService } from './services/allocator.service';
@Component({
    moduleId: module.id,
    selector: 'bene-list',
    templateUrl: './bene-list.component.html',
    providers: [BeneListService, AllocatorService]
})
export class BeneListComponent implements OnInit {
    beneList: Array<iBene>;
    currentBene: iBene;
    totalPercent: number;
    constructor(private route: ActivatedRoute, private beneListService: BeneListService, private allocatorService: AllocatorService) {
        this.beneList = this.beneList || this.beneListService.getBeneList();
        this.updatePercent();
    }

    ngOnInit() {
        this.beneList = this.beneListService.getBeneList();
    }

    delete(bene: any) {
        this.beneListService.deleteFromBeneList(bene);
    }

    updatePercent(bene?: iBene) {
        this.currentBene = bene;
        this.totalPercent = this.allocatorService.getSubTotal();
    }


}
