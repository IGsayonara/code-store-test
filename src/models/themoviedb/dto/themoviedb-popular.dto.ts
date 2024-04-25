import { TheMovieDbResponseDto } from './themoviedb.dto';

export class ThePopularMoviesDbResponseDto {
  page: number;
  results: TheMovieDbResponseDto[];
  total_pages: number;
  total_results: number;
}
