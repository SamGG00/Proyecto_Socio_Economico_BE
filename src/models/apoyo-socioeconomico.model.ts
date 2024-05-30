import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Apoyo} from './apoyo.model';

@model()
export class ApoyoSocioeconomico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  @property({
    type: 'number',
    required: true,
  })
  Semestre: number;

  @property({
    type: 'Date',
    required: true,
  })
  Ano: number;

  @property({
    type: 'number',
    required: true,
  })
  Estudiantes_Aprobados: number;

  @property({
    type: 'string',
    required: true,
  })
  Sede_Apoyo: string;

  @property({
    type: 'string',
    required: true,
  })
  Autor: string;

  @belongsTo(() => Apoyo)
  Id_Apoyo: number;

  constructor(data?: Partial<ApoyoSocioeconomico>) {
    super(data);
  }
}

export interface ApoyoSocioeconomicoRelations {
  // describe navigational properties here
}

export type ApoyosocioeconomicoWithRelations = ApoyoSocioeconomico & ApoyoSocioeconomicoRelations;
