import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})
export class MoviesHomeComponent implements OnInit {

  items:Movie[]=[];
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
   this.getPageMovies(1);
  }

  getPageMovies(page:number){
    this.movieService.searchMovies(page).subscribe((response:any)=>{
      this.items=response;
    })
  }
  paginate(event:any){
    this.getPageMovies(event.page+1);
  }
}
