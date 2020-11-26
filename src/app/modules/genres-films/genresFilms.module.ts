import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresFilmsRoutingModule } from './genresFilms-routing.module';
import { GenresFilmsComponent } from './pages/genres-films/genres-films.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [GenresFilmsComponent],
  imports: [
    CommonModule,
    GenresFilmsRoutingModule,
    MaterialModule,
  ]
})
export class GenresFilmsModule { }
