import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MovieCardComponent
  ]
})
export class SharedModule { }
