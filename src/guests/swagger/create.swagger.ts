import { ApiBodyOptions, ApiResponseOptions } from '@nestjs/swagger';
import { CreateGuestDto } from '../dto/create-guest.dto';

export const bodyCreateSWG: ApiBodyOptions = {
  type: CreateGuestDto,
  description: 'Crear un invitado',
  examples: {
    a: {
      summary: 'Crear un invitado',
      description:
        'Estas son las propiedades para la actualización de un invitado',
      value: {
        cedula: '094357986',
        date: new Date(),
        departmentId: 1,
        firstname: 'Luis',
        lastname: ' Morales',
        // hour: '',
        note: 'Test',
        reason: 'Motivo',
        registerDate: new Date(),
        status: 'test',
      } as CreateGuestDto,
    },
  },
};

const exampleResponse = {
  id: 1,
  cedula: '094357986',
  date: new Date(),
  departmentId: 1,
  firstname: 'Luis',
  lastname: ' Morales',
  // hour: '',
  note: 'Test',
  reason: 'Motivo',
  registerDate: new Date(),
  status: 'finalizado',
};

export const okResponseCreateSWG: ApiResponseOptions = {
  description: 'This description defines when a 200 (OK) is returned',
  schema: {
    type: 'string',
    example: exampleResponse,
  },
};
