import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
