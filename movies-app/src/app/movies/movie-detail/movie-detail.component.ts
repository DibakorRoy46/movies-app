import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { Movie, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie:Movie|null=null;
  imageSizes=IMAGES_SIZES;
  movieVideo:MovieVideo[]=[];
  constructor(private route:ActivatedRoute,
    private movieService:MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      this.getMovieDetails(id);
      this.getMovieVideos(id);
    })
  }

  getMovieDetails(id:string){
    this.movieService.getMovie(id).subscribe((res)=>{
      this.movie=res;
    })
  }

  getMovieVideos(id:string){
    this.movieService.getMoviesVideo(id).subscribe((res)=>{
      this.movieVideo=res;
    })
  }
}
