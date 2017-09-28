import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

/* Feature Modules */
import { AppComponent } from './app.component';
import { BeneFormComponent } from './bene-form.component';
import { BeneListComponent } from './bene-list.component';
import { BeneIndividualComponent } from './bene-individual.component';
import { iAddress } from './interfaces/address.interface';
import { iBene } from './interfaces/bene.interface';
import { BeneListService } from './services/beneList.service';
import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'pForm/:id', component: BeneFormComponent, data: {type: 'Primary'}},
  {path: 'cForm/:id', component: BeneFormComponent, data: {type: 'Contingent'}},
  {
    path: 'list',
    component: BeneListComponent
  },
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        BeneFormComponent,
        BeneListComponent,
        BeneIndividualComponent,
        ControlMessagesComponent
    ],
    providers: [BeneListService, ValidationService ],
    bootstrap: [ AppComponent ]
})
export class BeneModule { }
