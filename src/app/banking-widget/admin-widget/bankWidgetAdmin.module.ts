import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Feature Modules */
import { BankWidgetAdminComponent } from './bankWidgetAdmin.component';
import { CompleteCusComponent } from './complete.component';
import { AppComponent } from './bankApp.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    BankWidgetAdminComponent,
    CompleteCusComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class BankAdminModule { }
