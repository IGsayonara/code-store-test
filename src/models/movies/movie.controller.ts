import { Controller, Get, Param, Res } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Response } from 'express';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/movies')
  async getMovies(@Res() res: Response): Promise<any> {
    const pdfStream = await this.movieService.getPopularMoviesPdfStream();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; movies.pdf');

    pdfStream.pipe(res);
  }

  @Get('/movies/:id')
  async getMovie(@Res() res: Response, @Param('id') id: number): Promise<any> {
    const pdfStream = await this.movieService.getMoviePdfStream(id);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; movies.pdf');

    pdfStream.pipe(res);
  }
}
