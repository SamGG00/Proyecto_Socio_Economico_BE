import {Entity, model, property, belongsTo} from '@loopback/repository';
import {ApoyoSocioeconomico} from './apoyo-socioeconomico.model';

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
  Ano: number;

  @property({
    type: 'number',
    required: true,
  })
  Semestre: number;

  @property({
    type: 'number',
    required: true,
  })
  Total_Estudiantes_Presentados: number;

  @property({
    type: 'string',
    required: true,
  })
  Autor: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha_Inicio: Date;

  @property({
    type: 'date',
    required: true,
  })
  Fecha_Fin: Date;

  @belongsTo(() => ApoyoSocioeconomico, {name: 'Apoyo_Socio_Economico'})
  Id_Apoyo_Socio_Economico: number;

  constructor(data?: Partial<Convocatoria>) {
    super(data);
  }
}

export interface ConvocatoriaRelations {
  // describe navigational properties here
}

export type ConvocatoriaWithRelations = Convocatoria & ConvocatoriaRelations;
