import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Feature Modules */
import { BankWidgetCusComponent } from './bankWidgetCus.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    BankWidgetCusComponent,
  ],
  bootstrap: [ BankWidgetCusComponent ]
})
export class BankCustomerModule { }
