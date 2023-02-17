import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  animations:[
    trigger('slideFade',[
      state('void',style({opacity:0})),
      transition('void<=>*',[animate('1s')])
    ])
  ]
})
export class HomeBannerComponent implements OnInit {
  @Input() items:Movie[]=[];
  currentIndex:number=0;
  imageSizes=IMAGES_SIZES;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.currentIndex=++this.currentIndex%this.items.length;
    },3000)
  }

}
