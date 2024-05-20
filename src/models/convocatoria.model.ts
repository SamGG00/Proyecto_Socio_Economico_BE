import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Apoyo} from './apoyo.model';

@model()
export class Convocatoria extends Entity {
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
  ano: number;

  @property({
    type: 'number',
    required: true,
  })
  semestre: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidadestudiantes: number;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'date',
    required: true,
  })
  inicio: Date;

  @property({
    type: 'date',
    required: true,
  })
  fin: Date;

  @belongsTo(() => Apoyo)
  apoyoId: number;

  constructor(data?: Partial<Convocatoria>) {
    super(data);
  }
}

export interface ConvocatoriaRelations {
  // describe navigational properties here
}

export type ConvocatoriaWithRelations = Convocatoria & ConvocatoriaRelations;
