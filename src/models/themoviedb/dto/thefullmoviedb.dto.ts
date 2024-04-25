class GenreDto {
  id: number;
  name: string;
}

class ProductionCompanyDto {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

class ProductionCountryDto {
  iso_3166_1: string;
  name: string;
}

class SpokenLanguageDto {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export class TheFullMovieResponseDto {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: GenreDto[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyDto[];
  production_countries: ProductionCountryDto[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguageDto[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
