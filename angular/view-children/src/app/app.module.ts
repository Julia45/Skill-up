import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockItemComponent } from './block-item/block-item.component';
import { BlocksCustomComponent } from './blocks-custom/blocks-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    BlockItemComponent,
    BlocksCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
