import { Component, Input, OnInit } from '@angular/core';
import { MovieVideo } from 'src/app/models/movie';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.scss']
})
export class VideoPopupComponent implements OnInit {
  @Input() key:string="";
  show:boolean=false;
  @Input() showPopup:boolean=false;
  constructor() {

  }

  ngOnInit(): void {

  }

}
