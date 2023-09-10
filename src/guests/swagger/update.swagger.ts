import { ApiBodyOptions, ApiResponseOptions } from '@nestjs/swagger';
import { UpdateGuestDto } from '../dto/update-guest.dto';

export const bodyUpdateSWG: ApiBodyOptions = {
  type: UpdateGuestDto,
  description: 'Actualizar un invitado',
  examples: {
    a: {
      summary: 'Actualizar un invitado',
      description:
        'Estas son las propiedades para la actualización de un invitado',
      value: {
        status: 'finalizado',
        note: 'test',
      } as UpdateGuestDto,
    },
  },
};

const exampleResponse = {
  id: 1,
  cedula: '094357986',
  date: new Date(),
  departamentId: '',
  firstname: 'Luis',
  lastname: ' Morales',
  hour: '',
  note: 'Test',
  reason: 'Motivo',
  registerDate: new Date(),
  status: 'finalizado',
};

export const okResponseUpdateSWG: ApiResponseOptions = {
  description: 'This description defines when a 200 (OK) is returned',
  schema: {
    type: 'string',
    example: exampleResponse,
  },
};
