import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Convocatoria, ConvocatoriaRelations, ApoyoSocioeconomico, ResultadoConvocatoria} from '../models';
import {ResultadoConvocatoriaRepository} from './resultado-convocatoria.repository';
import {ApoyoSocioeconomicoRepository} from './apoyo-socioeconomico.repository';

export class ConvocatoriaRepository extends DefaultCrudRepository<
  Convocatoria,
  typeof Convocatoria.prototype.id,
  ConvocatoriaRelations
> {

  public readonly apoyoSocioeconomicos: HasManyThroughRepositoryFactory<ApoyoSocioeconomico, typeof ApoyoSocioeconomico.prototype.id,
          ResultadoConvocatoria,
          typeof Convocatoria.prototype.id
        >;

  public readonly apoyoSocioeconomico: BelongsToAccessor<ApoyoSocioeconomico, typeof Convocatoria.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ResultadoConvocatoriaRepository') protected resultadoConvocatoriaRepositoryGetter: Getter<ResultadoConvocatoriaRepository>, @repository.getter('ApoyoSocioeconomicoRepository') protected apoyoSocioeconomicoRepositoryGetter: Getter<ApoyoSocioeconomicoRepository>,
  ) {
    super(Convocatoria, dataSource);
    this.apoyoSocioeconomico = this.createBelongsToAccessorFor('apoyoSocioeconomico', apoyoSocioeconomicoRepositoryGetter,);
    this.registerInclusionResolver('apoyoSocioeconomico', this.apoyoSocioeconomico.inclusionResolver);
    this.apoyoSocioeconomicos = this.createHasManyThroughRepositoryFactoryFor('apoyoSocioeconomicos', apoyoSocioeconomicoRepositoryGetter, resultadoConvocatoriaRepositoryGetter,);
    this.registerInclusionResolver('apoyoSocioeconomicos', this.apoyoSocioeconomicos.inclusionResolver);
  }
}
