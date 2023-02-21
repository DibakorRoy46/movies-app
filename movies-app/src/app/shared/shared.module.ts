import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import {PaginatorModule} from 'primeng/paginator';
import { SimpleBannerComponent } from './simple-banner/simple-banner.component';
import {TabViewModule} from 'primeng/tabview';
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import { ItemVideosComponent } from './item-videos/item-videos.component';
import { VideoPopupComponent } from './video-popup/video-popup.component';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
    SimpleBannerComponent,
    ItemOverviewComponent,
    ItemVideosComponent,
    VideoPopupComponent,
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    SharedRoutingModule,
    TabViewModule,
    DialogModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
    SimpleBannerComponent,
    PaginatorModule,
    TabViewModule,
    ItemOverviewComponent,
    ItemVideosComponent
  ]
})
export class SharedModule { }
