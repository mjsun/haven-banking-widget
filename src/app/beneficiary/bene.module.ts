import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/* Feature Modules */
import { AppComponent } from './app.component';
import { BeneFormComponent } from './bene-form.component';
import { BeneListComponent } from './bene-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'form', component: BeneFormComponent},
  {path: 'list', component: BeneListComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: [
    AppComponent,
    BeneFormComponent,
    BeneListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class BeneModule { }
