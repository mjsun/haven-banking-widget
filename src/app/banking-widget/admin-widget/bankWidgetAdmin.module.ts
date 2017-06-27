import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Feature Modules */
import { BankWidgetAdminComponent } from './bankWidgetAdmin.component';
import { CompleteCusComponent } from './complete.component';
import { AppComponent } from './bankApp.component';

const appRoutes: Routes = [
  {path:'', component: BankWidgetAdminComponent},
  {path:'complete', component: CompleteCusComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    BankWidgetAdminComponent,
    CompleteCusComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class BankAdminModule { }
