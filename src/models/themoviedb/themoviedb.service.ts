import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ThePopularMoviesDbResponseDto } from './dto/themoviedb-popular.dto';
import { TheFullMovieResponseDto } from './dto/thefullmoviedb.dto';
import * as process from 'process';

@Injectable()
export class TheMovieDbService {
  private axiosInstance = axios.create({
    baseURL: process.env.MOVIEDB_BASE_URL,
    params: {
      api_key: process.env.MOVIEDB_API_KEY,
    },
  });
  async fetchPopularMovies(): Promise<ThePopularMoviesDbResponseDto> {
    try {
      const response: AxiosResponse<ThePopularMoviesDbResponseDto> =
        await this.axiosInstance.get(`/movie/popular`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching popular movies');
    }
  }

  async fetchMovie(id: number): Promise<TheFullMovieResponseDto> {
    try {
      const response: AxiosResponse<TheFullMovieResponseDto> =
        await this.axiosInstance.get(`/movie/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching movie with id ${id}`);
    }
  }
}
