import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Municipio} from './municipio.model';
import {Contacto} from './contacto.model';

@model()
export class Estudiante extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  codigoestudiante: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'number',
    required: true,
  })
  edad: number;

  @property({
    type: 'string',
    required: true,
  })
  numeroidentificacion: string;

  @property({
    type: 'number',
    required: true,
  })
  pbm: number;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'number',
    required: true,
  })
  estrato: number;

  @property({
    type: 'number',
    required: true,
  })
  promedionotasactual: number;

  @property({
    type: 'number',
    required: true,
  })
  puntajeapoyos: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'number',
    required: true,
  })
  ultimosemestrecursado: number;

  @property({
    type: 'boolean',
    required: true,
  })
  hijos: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  sancionesdisciplinarias: boolean;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @belongsTo(() => Municipio, {name: 'municipionacimiento'})
  idmunicipionacimiento: number;

  @belongsTo(() => Municipio, {name: 'municipiovivienda'})
  idmunicipiovivienda: number;

  @belongsTo(() => Contacto)
  contactoId: number;

  constructor(data?: Partial<Estudiante>) {
    super(data);
  }
}

export interface EstudianteRelations {
  // describe navigational properties here
}

export type EstudianteWithRelations = Estudiante & EstudianteRelations;
