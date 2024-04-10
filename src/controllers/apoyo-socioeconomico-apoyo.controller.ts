import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ApoyoSocioeconomico,
  Apoyo,
} from '../models';
import {ApoyoSocioeconomicoRepository} from '../repositories';

export class ApoyoSocioeconomicoApoyoController {
  constructor(
    @repository(ApoyoSocioeconomicoRepository)
    public apoyoSocioeconomicoRepository: ApoyoSocioeconomicoRepository,
  ) { }

  @get('/apoyo-socioeconomicos/{id}/apoyo', {
    responses: {
      '200': {
        description: 'Apoyo belonging to ApoyoSocioeconomico',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Apoyo),
          },
        },
      },
    },
  })
  async getApoyo(
    @param.path.number('id') id: typeof ApoyoSocioeconomico.prototype.id,
  ): Promise<Apoyo> {
    return this.apoyoSocioeconomicoRepository.apoyo(id);
  }
}
