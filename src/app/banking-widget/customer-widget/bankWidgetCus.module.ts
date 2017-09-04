import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Feature Modules */
import { BankWidgetCusComponent } from './bankWidgetCus.component';
import { CompleteCusComponent } from './complete.component';
import { AppComponent } from './bankApp.component';

const appRoutes: Routes = [
    {path: '', component: BankWidgetCusComponent},
    {path: 'complete', component: CompleteCusComponent}
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
    BankWidgetCusComponent,
    CompleteCusComponent,
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class BankCustomerModule { }
