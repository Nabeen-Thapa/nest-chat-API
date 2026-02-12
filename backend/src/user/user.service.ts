import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from '@mikro-orm/postgresql';
import { User } from './entities/user.entity';
import { RegisterDto } from '../auth/dto/create-user.dto';
import { AuthService } from '../auth/auth.service';
import { LoginDto } from '../auth/dto/login-user.dto';

@Injectable()
export class UserService {
 constructor(
    private readonly em: EntityManager,
    @Inject(forwardRef(() => AuthService)) 
    private readonly authService: AuthService,
  ) {}
    

 async create(data: RegisterDto) {
    const user = this.em.create(User, data);
    await this.em.persistAndFlush(user);
    return user;
    return 'This action adds a new user';
  }

  async login(data: LoginDto) {

    return 'This action login user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
