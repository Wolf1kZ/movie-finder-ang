import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFilmsRoutingModule } from './topFilms-routing.module';
import { TopFilmsComponent } from './pages/top-films/top-films.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TopFilmsComponent],
  imports: [
    CommonModule,
    TopFilmsRoutingModule,
    MaterialModule,
  ]
})
export class TopFilmsModule { }
