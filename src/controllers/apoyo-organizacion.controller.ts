import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Apoyo,
  Organizacion,
} from '../models';
import {ApoyoRepository} from '../repositories';

export class ApoyoOrganizacionController {
  constructor(
    @repository(ApoyoRepository)
    public apoyoRepository: ApoyoRepository,
  ) { }

  @get('/apoyos/{id}/organizacion', {
    responses: {
      '200': {
        description: 'Organizacion belonging to Apoyo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Organizacion),
          },
        },
      },
    },
  })
  async getOrganizacion(
    @param.path.number('id') id: typeof Apoyo.prototype.id,
  ): Promise<Organizacion> {
    return this.apoyoRepository.organizacion(id);
  }
}
