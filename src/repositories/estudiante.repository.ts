import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Estudiante, EstudianteRelations, Programa} from '../models';
import {ProgramaRepository} from './programa.repository';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.codigoestudiante,
  EstudianteRelations
> {

  public readonly programa: BelongsToAccessor<Programa, typeof Estudiante.prototype.codigoestudiante>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProgramaRepository') protected programaRepositoryGetter: Getter<ProgramaRepository>,
  ) {
    super(Estudiante, dataSource);
    this.programa = this.createBelongsToAccessorFor('programa', programaRepositoryGetter,);
    this.registerInclusionResolver('programa', this.programa.inclusionResolver);
  }
}
