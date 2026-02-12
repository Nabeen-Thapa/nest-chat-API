import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [    
    forwardRef(() => AuthModule),   
    MikroOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
    exports: [UserService],           
})
export class UserModule { }
