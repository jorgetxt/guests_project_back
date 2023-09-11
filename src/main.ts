import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Guests Project Documentation')
    .setDescription('Api de proyecto invitados')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Usuarios')
    .addTag('Invitados')
    .addTag('Departamentos')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
