import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Organizacion} from './organizacion.model';

@model()
export class Apoyo extends Entity {
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
  Nombre: string;

  @property({
    type: 'boolean',
    required: true,
  })
  Interno: boolean;

  @belongsTo(() => Organizacion)
  Id_Organizacion: number;

  constructor(data?: Partial<Apoyo>) {
    super(data);
  }
}

export interface ApoyoRelations {
  // describe navigational properties here
}

export type ApoyoWithRelations = Apoyo & ApoyoRelations;
