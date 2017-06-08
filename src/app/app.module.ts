import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BankFormComponent } from './banking/bank-form.component';
/* Feature Modules */
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'bank', component: BankFormComponent },
      { path: '', redirectTo: 'bank', pathMatch: 'full' },
      { path: '**', redirectTo: 'bank', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    BankFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
