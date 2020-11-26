import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilmsRoutingModule } from './searchFilms-routing.module';

// Components
import { SearchFilmsComponent } from './pages/search-films/searchfilms.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SearchFilmsComponent
  ],
  imports: [
    CommonModule,
    SearchFilmsRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class SearchFilmsModule {
}
