import {Entity, model, property} from '@loopback/repository';

@model()
export class Organizacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
  })
  Correo: string;

  @property({
    type: 'string',
  })
  Celular: string;


  constructor(data?: Partial<Organizacion>) {
    super(data);
  }
}

export interface OrganizacionRelations {
  // describe navigational properties here
}

export type OrganizacionWithRelations = Organizacion & OrganizacionRelations;
