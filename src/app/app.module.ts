import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassicLayoutComponent } from './classic-layout/classic-layout.component';
import { MediaLayoutComponent } from './media-layout/media-layout.component';
import { SelectorComponent } from './selector/selector.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { InheritenceTestComponent } from './inheritence-test/inheritence-test.component';
import { CascadingTestComponent } from './cascading-test/cascading-test.component';
import { FontTestComponent } from './font-test/font-test.component';
import { BlockTestComponent } from './block-test/block-test.component';
import { BoxsizingTestComponent } from './boxsizing-test/boxsizing-test.component';
import { MarginOverwrapComponent } from './margin-overwrap/margin-overwrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicLayoutComponent,
    MediaLayoutComponent,
    SelectorComponent,
    PseudoComponent,
    InheritenceTestComponent,
    CascadingTestComponent,
    FontTestComponent,
    BlockTestComponent,
    BoxsizingTestComponent,
    MarginOverwrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
