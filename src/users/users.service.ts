import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  async findAll() {
    const data = await this.usersRepository.find();
    return data;
  }

  async findOne(id: number) {
    const data = await this.usersRepository.findOne({
      where: { id },
    });

    if (!data) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['no se encontró usuario'],
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return data;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data = await this.usersRepository.findOne({ where: { id } });
    if (!data) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['no se encontró usuario'],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return this.usersRepository.update(data, updateUserDto);
  }

  remove(id: number) {
    const data = await this.usersRepository.findOne({ where: { id } });

    if (!data) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['no se encontró usuario'],
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return this.usersRepository.delete(id);
  }
  }
}
