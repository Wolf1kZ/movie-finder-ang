import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAboutMovie, IAboutMovieVideo } from '../../../../core/services/movie.model';
import { MovieService } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  id: number;
  // @ts-ignore
  movie: IAboutMovie = {data: {}, rating: {}};
  // @ts-ignore
  movieVideos: IAboutMovieVideo;
  lengthMovieH = '';
  lengthMovieM = '';
  videoId = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getInformationAboutMovie(this.id).subscribe(
      response => {
        this.movie = response;
        this.lengthMovieH = this.movie.data.filmLength.split(':')[0];
        this.lengthMovieM = this.movie.data.filmLength.split(':')[1];
      }
    );
    this.movieService.getMovieVideos(this.id).subscribe(
      response => {
        this.movieVideos = response;
        this.videoId = this.movieVideos.trailers[0].url.split('=')[1];
      }
    );
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    document.body.appendChild(tag);
  }
}
