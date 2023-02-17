import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies:Movie[]=[];
  upcomingMovies:Movie[]=[];
  topRatedMovies:Movie[]=[];
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((response:any)=>{
      this.popularMovies=response;
    });
    this.movieService.getMovies('upcoming').subscribe((response:any)=>{
      this.upcomingMovies=response;
    })
    this.movieService.getMovies('top_rated').subscribe((response:any)=>{
      this.topRatedMovies=response;
    })
  }

}
