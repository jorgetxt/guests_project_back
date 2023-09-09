import { Department } from './entities/department.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepository.save(createDepartmentDto);
  }

  findAll() {
    return this.departmentRepository.find();
  }

  async findOne(id: number) {
    const data = await this.departmentRepository.findOne({
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

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const data = await this.departmentRepository.findOne({ where: { id } });

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
      return this.departmentRepository.update(data, updateDepartmentDto);
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

  remove(id: number) {
    const data = await this.departmentRepository.findOne({ where: { id } });

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
    return this.departmentRepository.softRemove;
  }
  }
}
