import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Convocatoria,
  Apoyo,
} from '../models';
import {ConvocatoriaRepository} from '../repositories';

export class ConvocatoriaApoyoController {
  constructor(
    @repository(ConvocatoriaRepository)
    public convocatoriaRepository: ConvocatoriaRepository,
  ) { }

  @get('/convocatorias/{id}/apoyo', {
    responses: {
      '200': {
        description: 'Apoyo belonging to Convocatoria',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Apoyo),
          },
        },
      },
    },
  })
  async getApoyo(
    @param.path.number('id') id: typeof Convocatoria.prototype.id,
  ): Promise<Apoyo> {
    return this.convocatoriaRepository.apoyo(id);
  }
}
