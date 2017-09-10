import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

/* Feature Modules */
import { AppComponent } from './app.component';
import { BeneFormComponent } from './bene-form.component';
import { BeneListComponent } from './bene-list.component';
import { BeneIndividualComponent } from './bene-individual.component';
import { iAddress } from './interfaces/address.interface';
import { iBene } from './interfaces/bene.interface';
import { BeneListService } from './services/beneList.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'form', component: BeneFormComponent},
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
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        BeneFormComponent,
        BeneListComponent,
        BeneIndividualComponent
    ],
    providers: [BeneListService],
    bootstrap: [ AppComponent ]
})
export class BeneModule { }
