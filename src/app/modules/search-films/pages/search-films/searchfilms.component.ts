import { Component, OnInit } from '@angular/core';
import { IFilm, ISearchMovie } from '../../../../core/services/movie.model';
import { MovieService } from '../../../../core/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchfilms',
  templateUrl: './searchfilms.component.html',
  styleUrls: ['./searchfilms.component.scss']
})
export class SearchFilmsComponent implements OnInit {

  movieName = '';
  page = 1;
  response: ISearchMovie = {films: [], keyword: '', pagesCount: 0, searchFilmsCountResult: 0};
  films: IFilm[] = [];

  constructor(
    private router: Router,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
  }

  searchMovie(): void {
    this.movieService.searchMovie(this.movieName, this.page).subscribe(response => {
      this.response = response;
      this.films = this.response.films;
    });
  }

  clickRouting(id: number): void {
    this.router.navigate(['about', id]);
  }

}
