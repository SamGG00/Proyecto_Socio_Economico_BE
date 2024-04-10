import {Entity, model, property} from '@loopback/repository';

@model()
export class Organizacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  correo?: string;

  @property({
    type: 'string',
  })
  celular?: string;


  constructor(data?: Partial<Organizacion>) {
    super(data);
  }
}

export interface OrganizacionRelations {
  // describe navigational properties here
}

export type OrganizacionWithRelations = Organizacion & OrganizacionRelations;
