import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

/* Feature Modules */
import { BankFormComponent } from './bank-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    BankFormComponent,
  ],
  bootstrap: [ BankFormComponent ]
})
export class BankModule { }
