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
  name: string;
}
