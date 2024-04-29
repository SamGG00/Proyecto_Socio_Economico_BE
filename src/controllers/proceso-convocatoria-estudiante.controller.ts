import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ProcesoConvocatoria,
  Estudiante,
} from '../models';
import {ProcesoConvocatoriaRepository} from '../repositories';

export class ProcesoConvocatoriaEstudianteController {
  constructor(
    @repository(ProcesoConvocatoriaRepository)
    public procesoConvocatoriaRepository: ProcesoConvocatoriaRepository,
  ) { }

  @get('/proceso-convocatorias/{id}/estudiante', {
    responses: {
      '200': {
        description: 'Estudiante belonging to ProcesoConvocatoria',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Estudiante),
          },
        },
      },
    },
  })
  async getEstudiante(
    @param.path.number('id') id: typeof ProcesoConvocatoria.prototype.id,
  ): Promise<Estudiante> {
    return this.procesoConvocatoriaRepository.estudiante(id);
  }
}
