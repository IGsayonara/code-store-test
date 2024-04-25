import { Injectable } from '@nestjs/common';
import { TheMovieDbService } from '../themoviedb/themoviedb.service';
import { DtoToMovieSerializer } from './serializers/dto-to-movie.serializer';
import { PDFGenerationService } from '../pdf/pdf.service';
import { MovieToPdfSerializer } from './serializers/movie-to-pdf.serializer';

@Injectable()
export class MovieService {
  constructor(
    private readonly theMovieDbService: TheMovieDbService,
    private readonly pdfGenerationService: PDFGenerationService,
    private readonly moviesToPdfSerializer: MovieToPdfSerializer,
  ) {}
  async getPopularMoviesPdfStream(): Promise<any> {
    const popularMoviesDto = await this.theMovieDbService.fetchPopularMovies();
    const movies = DtoToMovieSerializer.fromDTO(
      popularMoviesDto,
      (dto) => dto.results,
    );

    const inputData = this.moviesToPdfSerializer.serializeMovies(movies);

    return await this.pdfGenerationService.generatePDF(inputData);
  }
}
