import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Convocatoria} from './convocatoria.model';

@model()
export class ProcesoConvocatoria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  @property({
    type: 'boolean',
    required: true,
  })
  Aprobado: boolean;

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

  @belongsTo(() => Convocatoria, {name: 'Convocatoria'})
  Id_Convocatoria: number;

  constructor(data?: Partial<ProcesoConvocatoria>) {
    super(data);
  }
}

export interface ProcesoConvocatoriaRelations {
  // describe navigational properties here
}

export type ProcesoConvocatoriaWithRelations = ProcesoConvocatoria & ProcesoConvocatoriaRelations;
