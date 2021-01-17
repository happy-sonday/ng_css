import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockTestComponent } from './block-test/block-test.component';
import { BoxsizingTestComponent } from './boxsizing-test/boxsizing-test.component';
import { CardListReviewComponent } from './card-list-review/card-list-review.component';
import { CascadingTestComponent } from './cascading-test/cascading-test.component';
import { ClassicLayoutComponent } from './classic-layout/classic-layout.component';
import { FlexGrownshrinkComponent } from './flex-grownshrink/flex-grownshrink.component';
import { FlexHmpgComponent } from './flex-hmpg/flex-hmpg.component';
import { FluxTestComponent } from './flux-test/flux-test.component';
import { FontTestComponent } from './font-test/font-test.component';
import { AreaAliasComponent } from './grid/area-alias/area-alias.component';
import { AutoDfnComponent } from './grid/auto-dfn/auto-dfn.component';
import { BasicComponent } from './grid/basic/basic.component';
import { CellComponent } from './grid/cell/cell.component';
import { GapComponent } from './grid/gap/gap.component';
import { InheritenceTestComponent } from './inheritence-test/inheritence-test.component';
import { MarginOverwrapComponent } from './margin-overwrap/margin-overwrap.component';
import { MediaLayoutComponent } from './media-layout/media-layout.component';
import { OmLayoutComponent } from './om-layout/om-layout.component';
import { OverlaytestComponent } from './overlaytest/overlaytest.component';
import { PositionTestComponent } from './position-test/position-test.component';
import { PostionNavComponent } from './postion-nav/postion-nav.component';
import { PostionTest2Component } from './postion-test2/postion-test2.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { AlignSelfComponent } from './rct-layout/align-self/align-self.component';
import { AutoMarginComponent } from './rct-layout/auto-margin/auto-margin.component';
import { ColumnComponent } from './rct-layout/column/column.component';
import { RctLayoutComponent } from './rct-layout/rct-layout.component';
import { ResponsivePageComponent } from './responsive-page/responsive-page.component';
import { SelectorComponent } from './selector/selector.component';
import { TableBorderComponent } from './table-border/table-border.component';
import { CardListComponent } from './ui/card-list/card-list.component';
import { CardList2Component } from './ui/card-list2/card-list2.component';
import { MenuComponent } from './ui/menu/menu.component';
import { MessageComponent } from './ui/message/message.component';
import { ModalComponent } from './ui/modal/modal.component';
import { UiComponent } from './ui/ui.component';
import { GridHmpgComponent } from './grid-hmpg/grid-hmpg.component';
import { GridHmpgAliasComponent } from './grid-hmpg-alias/grid-hmpg-alias.component';





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

    FlexHmpgComponent,

    BasicComponent,
    GapComponent,

    AutoDfnComponent,

    CellComponent,

    AreaAliasComponent,

    GridHmpgComponent,

    GridHmpgAliasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
