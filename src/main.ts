import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3535;
  await app.listen(port);
  Logger.log(`API is running on: http://localhost:${port}/`);
}

bootstrap();
