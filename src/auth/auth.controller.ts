import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiTags, ApiBody, ApiOkResponse } from '@nestjs/swagger/dist';
import { bodyLoginSWG, okResponseLoginSWG } from './swagger/login.swagger';
import {
  bodyRegisterSWG,
  okResponseRegisterSWG,
} from './swagger/register.swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody(bodyRegisterSWG)
  @ApiOkResponse(okResponseRegisterSWG)
  @Post('register')
  registerUser(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @ApiBody(bodyLoginSWG)
  @ApiOkResponse(okResponseLoginSWG)
  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}
