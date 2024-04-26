import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.APP_PORT;
  if (!port) throw new Error('App port must be defined');

  await app.listen(process.env.APP_PORT);
}

bootstrap();
