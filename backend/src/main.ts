import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MikroORM } from '@mikro-orm/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const orm = app.get(MikroORM);
  await orm.getSchemaGenerator().updateSchema(); // creates missing tables

  await app.listen(configService.get<number>('PORT') ||"");
}
bootstrap();
