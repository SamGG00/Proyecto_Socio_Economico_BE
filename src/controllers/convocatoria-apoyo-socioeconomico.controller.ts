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
  ApoyoSocioeconomico,
} from '../models';
import {ConvocatoriaRepository} from '../repositories';

export class ConvocatoriaApoyoSocioeconomicoController {
  constructor(
    @repository(ConvocatoriaRepository)
    public convocatoriaRepository: ConvocatoriaRepository,
  ) { }

  @get('/convocatorias/{id}/apoyo-socioeconomico', {
    responses: {
      '200': {
        description: 'ApoyoSocioeconomico belonging to Convocatoria',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ApoyoSocioeconomico),
          },
        },
      },
    },
  })
  async getApoyoSocioeconomico(
    @param.path.number('id') id: typeof Convocatoria.prototype.id,
  ): Promise<ApoyoSocioeconomico> {
    return this.convocatoriaRepository.apoyoSocioeconomico(id);
  }
}
