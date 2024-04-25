import { Injectable } from '@nestjs/common';
import { TheMovieDbService } from '../themoviedb/themoviedb.service';
import { MovieSerializer } from './serializers/movie.serializer';

@Injectable()
export class MovieService {
  constructor(private readonly theMovieDbService: TheMovieDbService) {}
  async getPopularMoviesPdf(): Promise<any> {
    const popularMoviesDto = await this.theMovieDbService.fetchPopularMovies();
    return MovieSerializer.fromDTO(popularMoviesDto, (dto) => dto.results);
  }
}
