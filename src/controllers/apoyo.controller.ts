import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Apoyo} from '../models';
import {ApoyoRepository} from '../repositories';

export class ApoyoController {
  constructor(
    @repository(ApoyoRepository)
    public apoyoRepository : ApoyoRepository,
  ) {}

  @post('/apoyos')
  @response(200, {
    description: 'Apoyo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Apoyo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apoyo, {
            title: 'NewApoyo',
            exclude: ['id'],
          }),
        },
      },
    })
    apoyo: Omit<Apoyo, 'id'>,
  ): Promise<Apoyo> {
    return this.apoyoRepository.create(apoyo);
  }

  @get('/apoyos/count')
  @response(200, {
    description: 'Apoyo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Apoyo) where?: Where<Apoyo>,
  ): Promise<Count> {
    return this.apoyoRepository.count(where);
  }

  @get('/apoyos')
  @response(200, {
    description: 'Array of Apoyo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Apoyo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Apoyo) filter?: Filter<Apoyo>,
  ): Promise<Apoyo[]> {
    return this.apoyoRepository.find(filter);
  }

  @patch('/apoyos')
  @response(200, {
    description: 'Apoyo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apoyo, {partial: true}),
        },
      },
    })
    apoyo: Apoyo,
    @param.where(Apoyo) where?: Where<Apoyo>,
  ): Promise<Count> {
    return this.apoyoRepository.updateAll(apoyo, where);
  }

  @get('/apoyos/{id}')
  @response(200, {
    description: 'Apoyo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Apoyo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Apoyo, {exclude: 'where'}) filter?: FilterExcludingWhere<Apoyo>
  ): Promise<Apoyo> {
    return this.apoyoRepository.findById(id, filter);
  }

  @patch('/apoyos/{id}')
  @response(204, {
    description: 'Apoyo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apoyo, {partial: true}),
        },
      },
    })
    apoyo: Apoyo,
  ): Promise<void> {
    await this.apoyoRepository.updateById(id, apoyo);
  }

  @put('/apoyos/{id}')
  @response(204, {
    description: 'Apoyo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() apoyo: Apoyo,
  ): Promise<void> {
    await this.apoyoRepository.replaceById(id, apoyo);
  }

  @del('/apoyos/{id}')
  @response(204, {
    description: 'Apoyo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.apoyoRepository.deleteById(id);
  }
}
