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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
