import { Controller, Get, Post, Body, Patch, Param, Delete, Response } from '@nestjs/common';
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
  async login(@Body() loginDto: LoginDto, @Response() res) {

    const data = await this.authService.login(loginDto);
    setAuthCookies(res, data.accessToken, data.refreshToken);

    console.log("auth login:", data)
    return data;
  }

}
