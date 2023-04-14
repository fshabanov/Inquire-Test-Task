import { NestFactory } from '@nestjs/core';

import { ENV } from './common/enums/enums';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.APP.PORT);
}
bootstrap();
