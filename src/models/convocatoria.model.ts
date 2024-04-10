import {Entity, hasMany, model, property} from '@loopback/repository';
import {ApoyoSocioeconomico} from './apoyo-socioeconomico.model';
import {ProcesoConvocatoria} from './proceso-convocatoria.model';

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
  año: number;
  @property({
    type: 'number',
    required: true,
  })
  semestre: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidadEstudiantesPresentados: number;
  @property({
    type: 'string',
    required: true,
  })
  autor: string;
  @property({
    type: 'Date',
    required: true,
  })
  inicio: Date;
  @property({
    type: 'Date',
    required: true,
  })
  final: Date;

  @hasMany(() => ApoyoSocioeconomico, {through: {model: () => ProcesoConvocatoria}})
  apoyoSocioeconomicos: ApoyoSocioeconomico[];

  constructor(data?: Partial<Convocatoria>) {
    super(data);
  }
}

export interface ConvocatoriaRelations {
  // describe navigational properties here
}

export type ConvocatoriaWithRelations = Convocatoria & ConvocatoriaRelations;
