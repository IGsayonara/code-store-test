import { Injectable } from '@nestjs/common';
import { TheMovieDbService } from '../themoviedb/themoviedb.service';
import { DtoToMoviesSerializer } from './serializers/dto-to-movie.serializer';
import { PDFGenerationService } from '../pdf/pdf.service';
import { MovieToPdfSerializer } from './serializers/movie-to-pdf.serializer';
import { Readable } from 'stream';
import { DtoToFullMovieSerializer } from './serializers/dto-to-fullMovie.serializer';

@Injectable()
export class MovieService {
  constructor(
    private readonly theMovieDbService: TheMovieDbService,
    private readonly pdfGenerationService: PDFGenerationService,
    private readonly moviesToPdfSerializer: MovieToPdfSerializer,
  ) {}
  async getPopularMoviesPdfStream(): Promise<Readable> {
    const popularMoviesDto = await this.theMovieDbService.fetchPopularMovies();
    const movies = DtoToMoviesSerializer.moviesFromDTO(
      popularMoviesDto,
      (dto) => dto.results,
    );

    const inputData = this.moviesToPdfSerializer.serializeMovies(movies);

    return await this.pdfGenerationService.generatePDF(inputData);
  }

  async getMoviePdfStream(id: number): Promise<Readable> {
    const popularMoviesDto = await this.theMovieDbService.fetchMovie(id);
    const movie = DtoToFullMovieSerializer.movieFromDTO(
      popularMoviesDto,
      (dto) => dto,
    );

    const inputData = this.moviesToPdfSerializer.serializeFullMovie(movie);

    return await this.pdfGenerationService.generatePDF(inputData);
  }
}
