import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Apoyo, ApoyoRelations, Organizacion} from '../models';
import {OrganizacionRepository} from './organizacion.repository';

export class ApoyoRepository extends DefaultCrudRepository<
  Apoyo,
  typeof Apoyo.prototype.id,
  ApoyoRelations
> {

  public readonly organizacion: BelongsToAccessor<Organizacion, typeof Apoyo.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('OrganizacionRepository') protected organizacionRepositoryGetter: Getter<OrganizacionRepository>,
  ) {
    super(Apoyo, dataSource);
    this.organizacion = this.createBelongsToAccessorFor('organizacion', organizacionRepositoryGetter,);
    this.registerInclusionResolver('organizacion', this.organizacion.inclusionResolver);
  }
}
