import { Controller, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';  
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { setAuthCookies } from './utils/authCookie.utils';

@Controller('user/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  create(@Body() registerDto: RegisterDto) {
    return this.authService.create(registerDto);
  }

  @Post("login")
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {

    const data = await this.authService.login(loginDto);
    console.log("autn controler: ", data)
    setAuthCookies(res, data.accessToken, data.refreshToken);
    return data;
  }

}
