import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ORIGIN ? process.env.ORIGIN.split(';') : [ 'http://localhost:8080'],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  });
  app.setGlobalPrefix('/api');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
