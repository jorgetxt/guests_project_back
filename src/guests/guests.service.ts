import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private guestRepository: Repository<Guest>,
  ) {}
  create(createGuestDto: CreateGuestDto) {
    const data = this.guestRepository.create(createGuestDto);
    return this.guestRepository.save(data);
  }

  findAll() {
    return this.guestRepository.find();
  }

  async findOne(id: number) {
    const data = await this.guestRepository.findOne({
      where: { id },
    });

    if (!data) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['no se encontró vistante'],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    try {
      return data;
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'BAD_REQUEST',
          message: ['Ha ocurrido un error', error],
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updateGuestDto: UpdateGuestDto) {
    const data = await this.guestRepository.findOne({ where: { id } });

    if (!data) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['no se encontró invitado'],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    try {
      return this.guestRepository.update(data, updateGuestDto);
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'BAD_REQUEST',
          message: ['Ha ocurrido un error', error],
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: number) {
    const data = await this.guestRepository.findOne({ where: { id } });

    if (!data) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['no se encontró tarjeta'],
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return this.guestRepository.softRemove;
  }
}
