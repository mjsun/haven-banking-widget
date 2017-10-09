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
        this.primaryBeneList = this.primaryBeneList || this.beneListService.getPrimaryBeneList();
        this.contingentBeneList = this.contingentBeneList || this.beneListService.getContingentBeneList();
        this.oldPrimaryBeneList = JSON.parse(JSON.stringify(this.primaryBeneList));
        this.oldContingentBeneList = JSON.parse(JSON.stringify(this.contingentBeneList));
        this.updatePercent();
    }

    ngOnInit() {
        this.primaryBeneList = this.beneListService.getPrimaryBeneList();
        this.contingentBeneList = this.beneListService.getContingentBeneList();

    }

    delete(bene: any, type: string) {
        this.beneListService.deleteFromBeneList(bene, type);
        this.totalPercentPrimary = this.allocatorService.getSubTotalPrimary();
        this.totalPercentContingent = this.allocatorService.getSubTotalContingent();
    }

    updatePercent(bene?: iBene) {
        this.currentBene = bene;
        this.totalPercentPrimary = this.allocatorService.getSubTotalPrimary();
        this.totalPercentContingent = this.allocatorService.getSubTotalContingent();
        //TODO should this be handled by the front end stuff??
        //let primaryPercent = document.getElementById('percentPrimary').innerText;
      /*  if(this.totalPercentPrimary != 100){
            //turn color red
            document.getElementById('percentPrimary').style.color = '#ff0000';
        }
       // let contingentPercent = document.getElementById('percentContingent').innerText;
        if(this.totalPercentContingent != 100.0){
            //turn color red
            document.getElementById('percentContingent').style.color = '#ff000';
        }
        */
    }

    cancelChanges(){
        this.primaryBeneList = this.oldPrimaryBeneList;
        this.beneListService.setPrimaryBeneList(this.primaryBeneList);
        this.contingentBeneList = this.oldContingentBeneList;
        this.beneListService.setContingentBeneList(this.contingentBeneList);
        this.totalPercentPrimary = this.allocatorService.getSubTotalPrimary();
        this.totalPercentContingent = this.allocatorService.getSubTotalContingent();
    }

}
