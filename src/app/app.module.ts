import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

/* Feature Modules */
import { BankFormComponent } from './banking/bank-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'bank', component: BankFormComponent },
      { path: '', redirectTo: 'bank', pathMatch: 'full' },
      { path: '**', redirectTo: 'bank', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    BankFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
