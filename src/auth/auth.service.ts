import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerObject: RegisterAuthDto) {
    const { password } = registerObject;
    const plainToHash = await hash(password, 10);

    registerObject = {
      ...registerObject,
      password: plainToHash,
    };

    const userExist = await this.usersRepository.findOne({
      where: { username: registerObject.roll },
    });

    if (!!userExist) {
      throw new HttpException(
        {
          statusCode: HttpStatus.CONFLICT,
          error: 'CONFLICT',
          message: ['usuario ya existe', process.env.JWT_SECRET],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    try {
      const data = this.usersRepository.save(registerObject);
      return data;
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'BAD REQUEST',
          message: ['Ha ocurrido un error', error],
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
  async login(loginObject: LoginAuthDto) {
    const { username, password } = loginObject;

    const { password: passwordResponse, ...findUser } =
      await this.usersRepository
        .createQueryBuilder()
        .addSelect('user.password AS User_password')
        .where('user.username = :username', { username })
        .select()
        .getOne();

    if (!findUser) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'Not found',
          message: ['Usuario no encontrado'],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const checkPass = await compare(password, passwordResponse);

    if (!checkPass) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['Contraseña no coincide'],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const payload = { name: findUser.username, roll: findUser.roll };

    const token = this.jwtService.sign(payload);

    const data = { user: findUser, token };

    return data;
  }
}