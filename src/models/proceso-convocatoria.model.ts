import {Entity, model, property} from '@loopback/repository';

@model()
export class ProcesoConvocatoria extends Entity {
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
  estudianteid: number;

  @property({
    type: 'boolean',
    required: true,
  })
  aprobado: boolean;

  @property({
    type: 'date',
    required: true,
  })
  fecha: boolean;

  @property({
    type: 'number',
    required: true,
  })
  semestre: number;

  @property({
    type: 'number',
  })
  convocatoriaId?: number;

  @property({
    type: 'number',
  })
  apoyoSocioeconomicoId?: number;

  constructor(data?: Partial<ProcesoConvocatoria>) {
    super(data);
  }
}

export interface ProcesoConvocatoriaRelations {
  // describe navigational properties here
}

export type ProcesoConvocatoriaWithRelations = ProcesoConvocatoria & ProcesoConvocatoriaRelations;
