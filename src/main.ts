import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //main.ts에 글로벌 파이프를 사용함으로써 컨트롤러에서 따로 파이프를 연결하지 않아도 된다.
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
