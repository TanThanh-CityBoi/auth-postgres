import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, disableErrorMessages: false }),
  );
  await app.listen(process.env.PORT, () => {
    console.log('SERVER STARTED ON PORT: ', process.env.PORT);
  });
}
bootstrap();
