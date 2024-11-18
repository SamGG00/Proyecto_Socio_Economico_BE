import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Municipio} from './municipio.model';
import {Contacto} from './contacto.model';
import {Programa} from './programa.model';

@model()
export class Estudiante extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  Codigo_Estudiante: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Genero: string;

  @property({
    type: 'number',
    required: true,
  })
  Edad: number;

  @property({
    type: 'string',
    required: true,
  })
  Tipo_Identificacion: string;
  @property({
    type: 'string',
    required: true,
  })
  Numero_De_Identificacion: string;

  @property({
    type: 'number',
    required: true,
  })
  PBM: number;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  Celular: string;

  @property({
    type: 'number',
    required: true,
  })
  Estrato: number;

  @property({
    type: 'number',
    required: true,
  })
  Promedio_Notas: number;

  @property({
    type: 'number',
    required: true,
  })
  Puntaje_De_Apoyos: number;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @property({
    type: 'string',
    required: true,
  })
  Ultimo_Semestre_Cursado: string;

  @property({
    type: 'boolean',
    required: true,
  }) Hijos: boolean;


  @property({
    type: 'string',
    required: true,
  })
  Autor: string;

  @property({
    type: 'boolean',
    required: true,
  })
  Retiros_Bajo_Rendimiento: boolean;
  @property({
    type: 'boolean',
    required: true,
  })
  Sanciones_Disciplinarias: boolean;
  @property({
    type: 'boolean',
    required: true,
  })
  Aspirante_Especial: boolean;

  @property({
    type: 'string',
    required: true,
  })
  Semestre_Bajo_Rendimiento: string;
  @property({
    type: 'string',
    required: true,
  })
  Semestre_Sancion: string;
  @property({
    type: 'string',
    required: true,
  })
  Tipo_De_Aspirante: string;

  @belongsTo(() => Municipio, {name: 'Municipio_Nacimiento'})
  Id_Municipio_Nacimiento: number;

  @belongsTo(() => Municipio, {name: 'Municipio_Vivienda'})
  Id_Municipio_Vivienda: number;

  @belongsTo(() => Contacto, {name: 'Contacto'})
  Id_Contacto: number;

  @belongsTo(() => Programa, {name: 'Programa_Academico'})
  Id_Programa_Academico: number;

  constructor(data?: Partial<Estudiante>) {
    super(data);
  }
}

export interface EstudianteRelations {
  // describe navigational properties here
}

export type EstudianteWithRelations = Estudiante & EstudianteRelations;
