import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Feature Modules */
import { BankFormComponent } from './bank-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    BankFormComponent,
  ],
  bootstrap: [ BankFormComponent ]
})
export class BankModule { }
