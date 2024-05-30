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
  Nombre: string;
  @property({
    type: 'string',
    required: true,
  })
  Codigo_SNIES: string;

  @property({
    type: 'number',
    required: true,
  })
  Duracion_Semestres: number;


  @belongsTo(() => Facultad)
  Id_Facultad: number;

  constructor(data?: Partial<Programa>) {
    super(data);
  }
}

export interface ProgramaRelations {
  // describe navigational properties here
}

export type ProgramaWithRelations = Programa & ProgramaRelations;
