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
import { PositionTestComponent } from './position-test/position-test.component';
import { FluxTestComponent } from './flux-test/flux-test.component';
import { FlexGrownshrinkComponent } from './flex-grownshrink/flex-grownshrink.component';
import { PostionTest2Component } from './postion-test2/postion-test2.component';
import { PostionNavComponent } from './postion-nav/postion-nav.component';
import { TableBorderComponent } from './table-border/table-border.component';
import { OverlaytestComponent } from './overlaytest/overlaytest.component';

import { OmLayoutComponent } from './om-layout/om-layout.component';
import { RctLayoutComponent } from './rct-layout/rct-layout.component';
import { ColumnComponent } from './rct-layout/column/column.component';
import { AutoMarginComponent } from './rct-layout/auto-margin/auto-margin.component';
import { AlignSelfComponent } from './rct-layout/align-self/align-self.component';
import { MenuComponent } from './ui/menu/menu.component';
import { UiComponent } from './ui/ui.component';
import { MessageComponent } from './ui/message/message.component';
import { ModalComponent } from './ui/modal/modal.component';
import { CardListComponent } from './ui/card-list/card-list.component';
import { ResponsivePageComponent } from './responsive-page/responsive-page.component';
import { CardList2Component } from './ui/card-list2/card-list2.component';
import { CardListReviewComponent } from './card-list-review/card-list-review.component';
import { FlexHmpgComponent } from './flex-hmpg/flex-hmpg.component';

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
    MarginOverwrapComponent,
    PositionTestComponent,
    FluxTestComponent,
    FlexGrownshrinkComponent,
    PostionTest2Component,
    PostionNavComponent,
    TableBorderComponent,
    OverlaytestComponent,

    OmLayoutComponent,

    RctLayoutComponent,

    ColumnComponent,

    AutoMarginComponent,

    AlignSelfComponent,

    MenuComponent,

    UiComponent,

    MessageComponent,

    ModalComponent,

    CardListComponent,

    ResponsivePageComponent,


    CardList2Component,

    CardListReviewComponent,

    FlexHmpgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
