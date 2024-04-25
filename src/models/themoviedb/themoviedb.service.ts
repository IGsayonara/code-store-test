import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ThePopularMoviesDbResponseDto } from './dto/themoviedb-popular.dto';
import { TheFullMovieResponseDto } from './dto/thefullmoviedb.dto';
import * as process from 'process';
console.log(process.env.MOVIEDB_API_KEY);

@Injectable()
export class TheMovieDbService {
  async fetchPopularMovies(): Promise<ThePopularMoviesDbResponseDto> {
    try {
      const response: AxiosResponse<ThePopularMoviesDbResponseDto> =
        await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}`,
        );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching popular movies');
    }
  }

  async fetchMovie(id: number): Promise<TheFullMovieResponseDto> {
    try {
      const response: AxiosResponse<TheFullMovieResponseDto> = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIEDB_API_KEY}`,
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching movie with id ${id}`);
    }
  }
}
