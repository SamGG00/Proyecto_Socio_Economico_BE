import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Programa, ProgramaRelations, Facultad} from '../models';
import {FacultadRepository} from './facultad.repository';

export class ProgramaRepository extends DefaultCrudRepository<
  Programa,
  typeof Programa.prototype.id,
  ProgramaRelations
> {

  public readonly facultad: BelongsToAccessor<Facultad, typeof Programa.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('FacultadRepository') protected facultadRepositoryGetter: Getter<FacultadRepository>,
  ) {
    super(Programa, dataSource);
    this.facultad = this.createBelongsToAccessorFor('facultad', facultadRepositoryGetter,);
    this.registerInclusionResolver('facultad', this.facultad.inclusionResolver);
  }
}
