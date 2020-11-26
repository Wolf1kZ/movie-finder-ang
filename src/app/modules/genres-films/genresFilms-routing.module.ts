import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresFilmsComponent } from './pages/genres-films/genres-films.component';

const routes: Routes = [
  {
    path: '',
    component: GenresFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresFilmsRoutingModule {
}
