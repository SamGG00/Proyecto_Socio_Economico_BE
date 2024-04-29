import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Facultad} from './facultad.model';

@model()
export class Programa extends Entity {
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
    required: true,
  })
  codigoSnies: string;

  @property({
    type: 'number',
    required: true,
  })
  duracion: number;


  @belongsTo(() => Facultad)
  facultadId: number;

  constructor(data?: Partial<Programa>) {
    super(data);
  }
}

export interface ProgramaRelations {
  // describe navigational properties here
}

export type ProgramaWithRelations = Programa & ProgramaRelations;
