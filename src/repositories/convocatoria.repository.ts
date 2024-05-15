import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Convocatoria, ConvocatoriaRelations, Apoyo} from '../models';
import {ApoyoRepository} from './apoyo.repository';

export class ConvocatoriaRepository extends DefaultCrudRepository<
  Convocatoria,
  typeof Convocatoria.prototype.id,
  ConvocatoriaRelations
> {

  public readonly apoyo: BelongsToAccessor<Apoyo, typeof Convocatoria.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ApoyoRepository') protected apoyoRepositoryGetter: Getter<ApoyoRepository>,
  ) {
    super(Convocatoria, dataSource);
    this.apoyo = this.createBelongsToAccessorFor('apoyo', apoyoRepositoryGetter,);
    this.registerInclusionResolver('apoyo', this.apoyo.inclusionResolver);
  }
}
