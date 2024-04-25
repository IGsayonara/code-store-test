import { IMovie } from '../interfaces/movie.interface';
export class DtoToMovieSerializer {
  static fromDTO<T>(dto: T, extractMovies: (dto: T) => any[]): IMovie[] {
    const moviesData = extractMovies(dto);
    return moviesData.map((movie) => ({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    }));
  }
}
