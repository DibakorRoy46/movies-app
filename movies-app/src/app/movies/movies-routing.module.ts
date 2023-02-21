import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';

const routes: Routes = [
  {
    path:'',
    component:MoviesHomeComponent
  },
  {
    path:':id',
    component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
