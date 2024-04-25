import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TheMovieDbModule } from '../themoviedb/themoviedb.module';
import { PDFModule } from '../pdf/pdf.module';
import { MovieToPdfSerializer } from './serializers/movie-to-pdf.serializer';

@Module({
  imports: [TheMovieDbModule, PDFModule],
  controllers: [MovieController],
  providers: [MovieService, MovieToPdfSerializer],
})
export class MovieModule {}
