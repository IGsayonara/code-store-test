import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('test')
  test(): string {
    return this.movieService.test();
  }
}
