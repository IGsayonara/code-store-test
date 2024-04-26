import { Module } from '@nestjs/common';
import { TheMovieDbService } from './themoviedb.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TheMovieDbService],
  exports: [TheMovieDbService],
})
export class TheMovieDbModule {}
