import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: (): Promise<any> => import('./modules/top-films/topFilms.module')
      .then((m): typeof m.TopFilmsModule => m.TopFilmsModule)
  },
  {
    path: 'search',
    loadChildren: (): Promise<any> => import('./modules/search-films/searchFilms.module')
      .then((m): typeof m.SearchFilmsModule => m.SearchFilmsModule)
  },
  {
    path: 'genresFilms',
    loadChildren: (): Promise<any> => import('./modules/genres-films/genresFilms.module')
      .then((m): typeof m.GenresFilmsModule => m.GenresFilmsModule)
  },
  {
    path: 'about/:id',
    loadChildren: (): Promise<any> => import('./modules/about-film/about-film.module')
      .then((m): typeof m.AboutFilmModule => m.AboutFilmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
