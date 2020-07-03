import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
