import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Feature Modules */
import { AppComponent } from './app.component';
import { BeneFormComponent } from './bene-form.component';
import { BeneListComponent } from './bene-list.component';
import { BeneIndividualComponent } from './bene-individual.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'form', component: BeneFormComponent},
  {path: 'list', component: BeneListComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: [
    AppComponent,
    BeneFormComponent,
    BeneListComponent,
    BeneIndividualComponent
  ],
  bootstrap: [ AppComponent ]
})
export class BeneModule { }
