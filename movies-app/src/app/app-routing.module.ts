import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'movies',
    loadChildren:()=>import('./movies/movies.module').then(x=>x.MoviesModule)
  },
  {
    path:'tvshows',
    loadChildren:()=>import('./tvshows/tvshows.module').then(x=>x.TVShowsModule)
  },
  {
    path:'genres',
    loadChildren:()=>import('./genres/genres.module').then(x=>x.GenresModule)
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
