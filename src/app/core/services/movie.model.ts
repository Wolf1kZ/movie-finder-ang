export interface ISearchMovie {
  keyword?: string;
  pagesCount: number;
  searchFilmsCountResult?: number;
  films: IFilm[];
}

export interface IFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: ICountry[];
  genres: IGenres[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface ICountry {
  name: string;
}

export interface IGenres {
  genre: string;
}

export interface IAboutMovie {
  data: {
    filmId: number,
    nameRu: string,
    nameEn: string,
    webUrl: string,
    posterUrl: string,
    posterUrlPreview: string,
    year: string,
    filmLength: string,
    slogan: string,
    description: string,
    type: string,
    ratingMpaa: string,
    ratingAgeLimits: number,
    premiereRu: string,
    distributors: string,
    premiereWorld: string,
    premiereDigital: string,
    premiereWorldCountry: string,
    premiereDvd: string,
    premiereBluRay: string,
    distributorRelease: string,
    countries: ICountry[],
    genres: IGenres[],
    facts: string[],
    seasons: ISeason[],
  };
  rating: {
    rating: number,
    ratingVoteCount: number,
    ratingImdb: number,
    ratingImdbVoteCount: number,
    ratingFilmCritics: string,
    ratingFilmCriticsVoteCount: number,
    ratingAwait: string,
    ratingAwaitCount: number,
    ratingRfCritics: string,
    ratingRfCriticsVoteCount: number
  };
}

export interface ISeason {
  number: number;
  episodes: IEpisode[];
}

export interface IEpisode {
  seasonNumber: number;
  episodeNumber: number;
  nameRu: string;
  nameEn: string;
  synopsis: string;
  releaseDate: string;
}

export interface IAboutMovieVideo {
  trailers: ITrailer[];
  teasers: ITrailer[];
}

export interface ITrailer {
  url: string;
  name: string;
  site: string;
  type: string;
}
