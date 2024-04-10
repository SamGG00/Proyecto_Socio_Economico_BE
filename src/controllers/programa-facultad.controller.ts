import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Programa,
  Facultad,
} from '../models';
import {ProgramaRepository} from '../repositories';

export class ProgramaFacultadController {
  constructor(
    @repository(ProgramaRepository)
    public programaRepository: ProgramaRepository,
  ) { }

  @get('/programas/{id}/facultad', {
    responses: {
      '200': {
        description: 'Facultad belonging to Programa',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Facultad),
          },
        },
      },
    },
  })
  async getFacultad(
    @param.path.number('id') id: typeof Programa.prototype.id,
  ): Promise<Facultad> {
    return this.programaRepository.facultad(id);
  }
}
