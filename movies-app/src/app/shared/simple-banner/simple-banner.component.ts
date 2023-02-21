import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-simple-banner',
  templateUrl: './simple-banner.component.html',
  styleUrls: ['./simple-banner.component.scss']
})
export class SimpleBannerComponent implements OnInit {

  @Input() movie:Movie |null =null;
  imageSizes=IMAGES_SIZES;

  constructor() {
  }
  ngOnInit(): void {

  }

}
