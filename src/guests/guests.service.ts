import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Guest } from './entities/guest.entity';
import { ILike, Repository } from 'typeorm';
import { Department } from 'src/departments/entities/department.entity';
import {
  ListResponse,
  ListResponseInfo,
} from 'src/auth/schemas/listResponse.schema';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private guestRepository: Repository<Guest>,
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}
  async create(createGuestDto: CreateGuestDto) {
    const department = await this.departmentRepository.findOne({
      where: { id: createGuestDto.departmentId },
    });

    if (!department) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['No se ha encontrado el departamento'],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const cedula = await this.guestRepository.findOne({
      where: { cedula: createGuestDto.cedula },
    });

    if (cedula) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'FORBIDDEN',
          message: ['Cedula ya existe'],
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const data = this.guestRepository.create({ department, ...createGuestDto });
    return this.guestRepository.save(data);
  }

  async findAll({
    key = 'date',
    keyword,
    page = 1,
    perPage,
    order = 'ASC',
  }: ListResponseInfo<Guest>): Promise<ListResponse<Guest>> {
    try {
      const [data, count] = await this.guestRepository.findAndCount({
        order: { [key]: order },
        skip: page - 1,
        take: perPage,
        ...(keyword && {
          where: [
            { firstname: ILike('%' + keyword + '%') },
            { lastname: ILike('%' + keyword + '%') },
            { cedula: ILike('%' + keyword + '%') },
            { status: ILike('%' + keyword + '%') },
            { reason: ILike('%' + keyword + '%') },
            { note: ILike('%' + keyword + '%') },
          ],
        }),
      });

      return {
        data,
        info: {
          page,
          perPage,
          key,
          keyword,
          order,
          total: count,
        },
      };
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
          message: ['no se encontró invitado'],
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return this.guestRepository.delete(id);
  }
}
