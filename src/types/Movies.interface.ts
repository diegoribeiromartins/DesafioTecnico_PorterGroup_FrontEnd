export interface GenresType {
  id: number;
  name: string;
}

export interface ProductionCompaniesType {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountriesType {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguagesType {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieType {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string | false;
  vote_average: number;
  vote_count: number;
  belongs_to_collections?: null;
  budget?: number;
  genres?: GenresType[];
  homepage?: string;
  imdb_id?: string;
  production_companies: ProductionCompaniesType[];
  production_countries: ProductionCountriesType[];
  revenue?: number;
  runtime?: number;
  spoken_languages: SpokenLanguagesType[];
  status?: string;
  tagline?: string;
}
