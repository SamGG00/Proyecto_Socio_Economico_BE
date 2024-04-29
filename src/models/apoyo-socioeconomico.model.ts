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
  semestre: number;

  @property({
    type: 'Date',
    required: true,
  })
  año: Date;

  @property({
    type: 'number',
    required: true,
  })
  cantidadEstudiantesTotalAdmitidos: number;

  @property({
    type: 'string',
    required: true,
  })
  lugarApoyo: string;

  @property({
    type: 'string',
    required: true,
  })
  apoyo: string;
  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @belongsTo(() => Apoyo)
  apoyoId: number;

  constructor(data?: Partial<ApoyoSocioeconomico>) {
    super(data);
  }
}

export interface ApoyoSocioeconomicoRelations {
  // describe navigational properties here
}

export type ApoyosocioeconomicoWithRelations = ApoyoSocioeconomico & ApoyoSocioeconomicoRelations;
