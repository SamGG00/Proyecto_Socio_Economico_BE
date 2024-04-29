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
  Convocatoria,
} from '../models';
import {ProcesoConvocatoriaRepository} from '../repositories';

export class ProcesoConvocatoriaConvocatoriaController {
  constructor(
    @repository(ProcesoConvocatoriaRepository)
    public procesoConvocatoriaRepository: ProcesoConvocatoriaRepository,
  ) { }

  @get('/proceso-convocatorias/{id}/convocatoria', {
    responses: {
      '200': {
        description: 'Convocatoria belonging to ProcesoConvocatoria',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Convocatoria),
          },
        },
      },
    },
  })
  async getConvocatoria(
    @param.path.number('id') id: typeof ProcesoConvocatoria.prototype.id,
  ): Promise<Convocatoria> {
    return this.procesoConvocatoriaRepository.convocatoria(id);
  }
}
