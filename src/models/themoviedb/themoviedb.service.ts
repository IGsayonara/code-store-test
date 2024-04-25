import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ThePopularMoviesDbResponseDto } from './dto/themoviedb-popular.dto';

@Injectable()
export class TheMovieDbService {
  async fetchPopularMovies(): Promise<ThePopularMoviesDbResponseDto> {
    try {
      const response: AxiosResponse<ThePopularMoviesDbResponseDto> =
        await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=api_key',
        );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching popular movies');
    }
  }
}
