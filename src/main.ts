import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //main.ts에 글로벌 파이프를 사용함으로써 컨트롤러에서 따로 파이프를 연결하지 않아도 된다.
  app.useGlobalPipes(new ValidationPipe({
    //whitelist는 dto와 다른 입력이 들어올때 걸러준다.
    whitelist: true,
    //whitelist와 같이 사용된다. whitelist는 dto에 정의되지 않는 속성을 자동으로 제거하지만 이것은 그런 속성이 있다면 요청 자체를 거부한다.
    forbidNonWhitelisted: true,
    //28강.입력되는 데이터를 dto클래스의 인스턴스로 자동변환해준다
    transform: true,
  }))
  await app.listen(3000);
}
bootstrap();
