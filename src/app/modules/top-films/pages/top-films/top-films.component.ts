import { Component, OnInit } from '@angular/core';
import { IFilm, ISearchMovie } from '../../../../core/services/movie.model';
import { MovieService } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss']
})
export class TopFilmsComponent implements OnInit {
  page = 1;
  response: ISearchMovie = {films: [], pagesCount: 0};
  films: IFilm[] = [];

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getTopMovies(this.page).subscribe((response) => {
      this.response = response;
      this.films = this.response.films;
    });
  }
}
