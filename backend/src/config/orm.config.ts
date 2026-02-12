// src/config/orm.config.ts
import { defineConfig } from '@mikro-orm/postgresql';
import { User } from '../user/entities/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  dbName: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  debug: true,
  entities: [User],           // list all entities here
  allowGlobalContext: true,   // optional for dev
});
