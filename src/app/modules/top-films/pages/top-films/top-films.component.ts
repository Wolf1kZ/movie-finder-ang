import { Component, OnInit } from '@angular/core';
import { IFilm, ISearchMovie } from '../../../../core/services/movie.model';
import { MovieService } from '../../../../core/services/movie.service';
import { Router } from '@angular/router';

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
    private router: Router,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getTopMovies(this.page).subscribe((response) => {
      this.response = response;
      this.films = this.response.films;
    });
  }

  clickRouting(id: number): void {
    this.router.navigate(['about', id]);
  }
}
