import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() item:Movie|null=null;
  imageSizes=IMAGES_SIZES;
  constructor() { }

  ngOnInit(): void {
  }

}
