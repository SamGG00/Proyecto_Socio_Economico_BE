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
import {ProcesoConvocatoria} from '../models';
import {ProcesoConvocatoriaRepository} from '../repositories';

export class ProcesoConvocatoriaController {
  constructor(
    @repository(ProcesoConvocatoriaRepository)
    public procesoConvocatoriaRepository : ProcesoConvocatoriaRepository,
  ) {}

  @post('/proceso-convocatorias')
  @response(200, {
    description: 'ProcesoConvocatoria model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProcesoConvocatoria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoConvocatoria, {
            title: 'NewProcesoConvocatoria',
            exclude: ['id'],
          }),
        },
      },
    })
    procesoConvocatoria: Omit<ProcesoConvocatoria, 'id'>,
  ): Promise<ProcesoConvocatoria> {
    return this.procesoConvocatoriaRepository.create(procesoConvocatoria);
  }

  @get('/proceso-convocatorias/count')
  @response(200, {
    description: 'ProcesoConvocatoria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProcesoConvocatoria) where?: Where<ProcesoConvocatoria>,
  ): Promise<Count> {
    return this.procesoConvocatoriaRepository.count(where);
  }

  @get('/proceso-convocatorias')
  @response(200, {
    description: 'Array of ProcesoConvocatoria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProcesoConvocatoria, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProcesoConvocatoria) filter?: Filter<ProcesoConvocatoria>,
  ): Promise<ProcesoConvocatoria[]> {
    return this.procesoConvocatoriaRepository.find(filter);
  }

  @patch('/proceso-convocatorias')
  @response(200, {
    description: 'ProcesoConvocatoria PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoConvocatoria, {partial: true}),
        },
      },
    })
    procesoConvocatoria: ProcesoConvocatoria,
    @param.where(ProcesoConvocatoria) where?: Where<ProcesoConvocatoria>,
  ): Promise<Count> {
    return this.procesoConvocatoriaRepository.updateAll(procesoConvocatoria, where);
  }

  @get('/proceso-convocatorias/{id}')
  @response(200, {
    description: 'ProcesoConvocatoria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProcesoConvocatoria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProcesoConvocatoria, {exclude: 'where'}) filter?: FilterExcludingWhere<ProcesoConvocatoria>
  ): Promise<ProcesoConvocatoria> {
    return this.procesoConvocatoriaRepository.findById(id, filter);
  }

  @patch('/proceso-convocatorias/{id}')
  @response(204, {
    description: 'ProcesoConvocatoria PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProcesoConvocatoria, {partial: true}),
        },
      },
    })
    procesoConvocatoria: ProcesoConvocatoria,
  ): Promise<void> {
    await this.procesoConvocatoriaRepository.updateById(id, procesoConvocatoria);
  }

  @put('/proceso-convocatorias/{id}')
  @response(204, {
    description: 'ProcesoConvocatoria PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() procesoConvocatoria: ProcesoConvocatoria,
  ): Promise<void> {
    await this.procesoConvocatoriaRepository.replaceById(id, procesoConvocatoria);
  }

  @del('/proceso-convocatorias/{id}')
  @response(204, {
    description: 'ProcesoConvocatoria DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.procesoConvocatoriaRepository.deleteById(id);
  }
}
