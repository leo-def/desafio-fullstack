import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ORIGIN ? process.env.ORIGIN.split(';') : [ 'http://localhost:8080'],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
  });
  app.setGlobalPrefix('/api');
  const config = new DocumentBuilder()
    .setTitle('Mentors')
    .setDescription('Mentors API')
    .setVersion('1.0')
    .addTag('mentor')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
