import { ApiBodyOptions, ApiResponseOptions } from '@nestjs/swagger';
import { LoginAuthDto } from '../dto/login-auth.dto';

export const bodyLoginSWG: ApiBodyOptions = {
  type: LoginAuthDto,
  description: 'Cada usuario puede contener un rol diferente',
  examples: {
    a: {
      summary: 'Usuario Supervisor',
      description: 'Esta son las credenciales de un usuario supervisor',
      value: {
        username: 'Juan1',
        password: '12345',
      } as LoginAuthDto,
    },
    b: {
      summary: 'Usuario Recepcion',
      description: 'Esta son las credenciales de un usuario de recepción',
      value: {
        username: 'Maria1',
        password: '12345',
      } as LoginAuthDto,
    },
  },
};

const exampleResponse = {
  user: {
    id: 1,
    firstName: 'Juan1',
    roll: 'supervisor',
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdDYiLCJlbWFpbCI6InRlc3Rvd0B0ZXN0LmNvbSIsImlhdCI6MTY5MjMxMjA3MCwiZXhwIjoxNjkyMzEyMTMwfQ.exr4xJHo8sFroQ6fcW5pXuL3OIvMSJQuX4DSDsWxD1o',
};

export const okResponseLoginSWG: ApiResponseOptions = {
  description: 'This description defines when a 200 (OK) is returned',
  schema: {
    type: 'string',
    example: exampleResponse,
  },
};
