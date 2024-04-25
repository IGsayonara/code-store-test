import { IFullMovie } from '../interfaces/fullMovie.interface';
export class DtoToFullMovieSerializer {
  static movieFromDTO<T>(
    dto: T,
    extractMovie: (dto: T) => IFullMovie & any,
  ): IFullMovie {
    const movie = extractMovie(dto);
    return {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      poster_image: movie.poster_path,
    };
  }
}
