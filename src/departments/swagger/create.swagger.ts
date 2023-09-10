import { ApiBodyOptions, ApiResponseOptions } from '@nestjs/swagger';
import { CreateDepartmentDto } from '../dto/create-department.dto';

export const bodyCreateSWG: ApiBodyOptions = {
  type: CreateDepartmentDto,
  description: 'Crear un departamento',
  examples: {
    a: {
      summary: 'Crear un departamento',
      description:
        'Estas son las propiedades para la actualización de un departamento',
      value: {
        name: 'departamento de prueba',
      } as CreateDepartmentDto,
    },
  },
};

const exampleResponse = {
  id: 1,
  name: 'departamento de prueba',
};

export const okResponseCreateSWG: ApiResponseOptions = {
  description: 'This description defines when a 200 (OK) is returned',
  schema: {
    type: 'string',
    example: exampleResponse,
  },
};
