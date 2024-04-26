import { Module } from '@nestjs/common';
import { MovieModule } from './models/movies/movie.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MovieModule,
    ConfigModule.forRoot({
      isGlobal: true, // make the config module available globally
      envFilePath: '.env', // specify the path to your environment file
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
