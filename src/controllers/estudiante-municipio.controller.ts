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
  Municipio,
} from '../models';
import {EstudianteRepository} from '../repositories';

export class EstudianteMunicipioController {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository: EstudianteRepository,
  ) { }

  @get('/estudiantes/{id}/municipio', {
    responses: {
      '200': {
        description: 'Municipio belonging to Estudiante',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Municipio),
          },
        },
      },
    },
  })
  async getMunicipio(
    @param.path.string('id') id: typeof Estudiante.prototype.codigoestudiante,
  ): Promise<Municipio> {
    return this.estudianteRepository.municipionacimiento(id);
  }
}
