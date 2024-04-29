import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Estudiante,
  Contacto,
} from '../models';
import {EstudianteRepository} from '../repositories';

export class EstudianteContactoController {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository: EstudianteRepository,
  ) { }

  @get('/estudiantes/{id}/contacto', {
    responses: {
      '200': {
        description: 'Contacto belonging to Estudiante',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Contacto),
          },
        },
      },
    },
  })
  async getContacto(
    @param.path.string('id') id: typeof Estudiante.prototype.codigoestudiante,
  ): Promise<Contacto> {
    return this.estudianteRepository.contacto(id);
  }
}
