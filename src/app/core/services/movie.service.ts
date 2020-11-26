import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_KEY = '177d7b2b-c494-45dc-ae84-7e486611f512';
  private searchUrl = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?';
  private topMoviesUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?';
  private searchByGenreUrl = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?';

  constructor(
    private http: HttpClient
  ) {
  }

  searchMovie(searchQuery: string, page: number): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-API-KEY', this.API_KEY);
    return this.http.get(
      this.searchUrl + `keyword=${searchQuery}&page=${page}`,
      {headers});
  }

  getTopMovies(page: number): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-API-KEY', this.API_KEY);
    return this.http.get(
      this.topMoviesUrl + `type=TOP_250_BEST_FILMS&page=${page}`,
      {headers});
  }

  searchMoviesByGenre(idGenre: number, page: number): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-API-KEY', this.API_KEY);
    return this.http.get(
      this.searchByGenreUrl + `genre=${idGenre}&type=FILM&page=${page}`,
      {headers}
    );
  }
}
