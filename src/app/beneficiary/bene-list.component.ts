import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iBene } from './interfaces/bene.interface';
import { BeneListService } from './services/beneList.service';
import { AllocatorService } from './services/allocator.service';
import { ReactiveFormsModule } from '@angular/forms';  
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'bene-list',
    templateUrl: './bene-list.component.html',
    providers: [BeneListService, AllocatorService]
})
export class BeneListComponent implements OnInit {
    primaryBeneList: Array<iBene> = [];
    contingentBeneList: Array<iBene> = [];
    oldPrimaryBeneList:  Array<iBene> = [];
    oldContingentBeneList: Array<iBene> = [];
    currentBene: iBene;
    totalPercentPrimary: number;
    totalPercentContingent: number;

    constructor(private route: ActivatedRoute, private beneListService: BeneListService, private allocatorService: AllocatorService, private router: Router) {
        this.primaryBeneList = this.primaryBeneList || this.beneListService.getBeneList();
        this.updatePercent();
    }

    ngOnInit() {
        this.primaryBeneList = this.beneListService.getBeneList();
        this.oldPrimaryBeneList = this.primaryBeneList;
        this.oldContingentBeneList = this.contingentBeneList;

    }

    delete(bene: any) {
        this.beneListService.deleteFromBeneList(bene);
    }

    updatePercent(bene?: iBene) {
        this.currentBene = bene;
        this.totalPercentPrimary = this.allocatorService.getSubTotalPrimary();
        this.totalPercentContingent = this.allocatorService.getSubTotalContingent();
    }

    cancelChanges(){
        console.log("Cancel changes");
        this.primaryBeneList = this.oldPrimaryBeneList;
        this.contingentBeneList = this.oldContingentBeneList;
        this.router.navigate(['/list']);
    }

}
