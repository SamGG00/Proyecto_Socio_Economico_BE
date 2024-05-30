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
  Programa,
} from '../models';
import {EstudianteRepository} from '../repositories';

export class EstudianteProgramaController {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository: EstudianteRepository,
  ) { }

  @get('/estudiantes/{id}/programa', {
    responses: {
      '200': {
        description: 'Programa belonging to Estudiante',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Programa),
          },
        },
      },
    },
  })
  async getPrograma(
    @param.path.string('id') id: typeof Estudiante.prototype.Codigo_Estudiante,
  ): Promise<Programa> {
    return this.estudianteRepository.programa(id);
  }
}
