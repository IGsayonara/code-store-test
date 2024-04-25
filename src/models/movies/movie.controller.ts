import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/movies')
  async test(): Promise<any> {
    return await this.movieService.getPopularMoviesPdf();
  }
}
