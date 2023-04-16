import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ENV } from './common/enums/enums';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.setGlobalPrefix(ENV.API.PREFIX);
  await app.listen(ENV.APP.PORT);
}
bootstrap();
