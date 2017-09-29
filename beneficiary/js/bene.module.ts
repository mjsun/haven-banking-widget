import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

/* Feature Modules */
import { AppComponent } from './components/app-component/app.component';
import { BeneFormComponent } from './components/bene-form/bene-form.component';
import { BeneListComponent } from './components/bene-list/bene-list.component';
import { BeneIndividualComponent } from './components/bene-individual/bene-individual.component';
import { iAddress } from './interfaces/address.interface';
import { iBene } from './interfaces/bene.interface';
import { BeneListService } from './services/beneList.service';
import { ControlMessagesComponent } from './components/control-message/control-messages.component';
import { ValidationService } from './services/validation.service';

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
