import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home/home.component';
import { ItemBannerComponent } from './item-banner/item-banner.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeBannerComponent,
    HomeComponent,
    ItemBannerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
  ]
})
export class HomeModule { }
