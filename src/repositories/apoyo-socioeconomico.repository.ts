import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ApoyoSocioeconomico, ApoyoSocioeconomicoRelations, Apoyo} from '../models';
import {ApoyoRepository} from './apoyo.repository';

export class ApoyoSocioeconomicoRepository extends DefaultCrudRepository<
  ApoyoSocioeconomico,
  typeof ApoyoSocioeconomico.prototype.id,
  ApoyoSocioeconomicoRelations
> {

  public readonly apoyo: BelongsToAccessor<Apoyo, typeof ApoyoSocioeconomico.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ApoyoRepository') protected apoyoRepositoryGetter: Getter<ApoyoRepository>,
  ) {
    super(ApoyoSocioeconomico, dataSource);
    this.apoyo = this.createBelongsToAccessorFor('apoyo', apoyoRepositoryGetter,);
    this.registerInclusionResolver('apoyo', this.apoyo.inclusionResolver);
  }
}
