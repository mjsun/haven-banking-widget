import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Feature Modules */
import { BeneFormComponent } from './bene-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    BeneFormComponent,
  ],
  bootstrap: [ BeneFormComponent ]
})
export class BeneModule { }
