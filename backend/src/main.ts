import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MikroORM } from '@mikro-orm/core';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const orm = app.get(MikroORM);
  await orm.getSchemaGenerator().updateSchema(); // creates missing tables
  app.use(cookieParser());
  await app.listen(configService.get<number>('PORT') ||"");
}
bootstrap();
