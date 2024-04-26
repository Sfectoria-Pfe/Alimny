import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({origin:"*"})
  const config = new DocumentBuilder()
  .setTitle('Median')
  .setDescription('The Median API description')
  .setVersion('0.1')
  .addApiKey({type:'apiKey',name:'Authorization',in:'header'},'apiKey')
  .build();
  app.useStaticAssets('upload',{prefix:'/upload'})

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
