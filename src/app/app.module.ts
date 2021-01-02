import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassicLayoutComponent } from './classic-layout/classic-layout.component';
import { MediaLayoutComponent } from './media-layout/media-layout.component';
import { SelectorComponent } from './selector/selector.component';
import { PseudoComponent } from './pseudo/pseudo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicLayoutComponent,
    MediaLayoutComponent,
    SelectorComponent,
    PseudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
