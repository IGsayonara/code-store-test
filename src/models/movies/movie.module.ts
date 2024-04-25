import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TheMovieDbModule } from '../themoviedb/themoviedb.module';

@Module({
  imports: [TheMovieDbModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
