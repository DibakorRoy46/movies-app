import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieVideo } from 'src/app/models/movie';

@Component({
  selector: 'app-item-videos',
  templateUrl: './item-videos.component.html',
  styleUrls: ['./item-videos.component.scss'],
})
export class ItemVideosComponent implements OnInit {
  @Input() item: MovieVideo[] = [];
  display: boolean = false;
  videoKey: string = '';
  baseUrl:string=''
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  closeDiolog() {
    this.display = false;
    this.videoKey = "";
  }
  showDialog(key: string) {
    this.videoKey = key;
    this.display = true;
  }

  getSafeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
