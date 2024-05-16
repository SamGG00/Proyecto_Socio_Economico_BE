import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Estudiante} from './estudiante.model';
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
  aprobado: boolean;

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

  @belongsTo(() => Estudiante)
  estudianteId: string;

  @belongsTo(() => Convocatoria)
  convocatoriaId: number;

  constructor(data?: Partial<ProcesoConvocatoria>) {
    super(data);
  }
}

export interface ProcesoConvocatoriaRelations {
  // describe navigational properties here
}

export type ProcesoConvocatoriaWithRelations = ProcesoConvocatoria & ProcesoConvocatoriaRelations;
