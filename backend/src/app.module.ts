import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import mikroOrmConfig from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // loads .env
    MikroOrmModule.forRoot(mikroOrmConfig),    // correct config
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      // validationSchema: Joi.object({
      //   PORT: Joi.number().default(3000),
      //   DATABASE_URL: Joi.string().required(),
      //   JWT_SECRET: Joi.string().required(),
      // }),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
