import { ApiBodyOptions, ApiResponseOptions } from '@nestjs/swagger';
import { RegisterAuthDto } from '../dto/register-auth.dto';

export const bodyRegisterSWG: ApiBodyOptions = {
  type: RegisterAuthDto,
  description: 'Cada usuario puede contener un rol diferente',
  examples: {
    a: {
      summary: 'Usuario Supervisor',
      description:
        'Estos son los campos para la creación de un usuario supervisor',
      value: {
        username: 'Juan1',
        password: '12345',
        roll: 'supervisor',
      } as RegisterAuthDto,
    },
    b: {
      summary: 'Usuario Recepción',
      description: 'Estos son los campos para la creación de un recepción',
      value: {
        username: 'Maria1',
        password: '12345',
        roll: 'recepcion',
      } as RegisterAuthDto,
    },
  },
};

const exampleResponse = {
  id: 1,
  username: 'Juan1',
  roll: 'supervisor',
};

export const okResponseRegisterSWG: ApiResponseOptions = {
  description: 'This description defines when a 200 (OK) is returned',
  schema: {
    type: 'string',
    example: exampleResponse,
  },
};
