import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Estudiante, EstudianteRelations, Municipio} from '../models';
import {MunicipioRepository} from './municipio.repository';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.codigoestudiante,
  EstudianteRelations
> {

  public readonly municipionacimiento: BelongsToAccessor<Municipio, typeof Estudiante.prototype.codigoestudiante>;

  public readonly municipiovivienda: BelongsToAccessor<Municipio, typeof Estudiante.prototype.codigoestudiante>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('MunicipioRepository') protected municipioRepositoryGetter: Getter<MunicipioRepository>,
  ) {
    super(Estudiante, dataSource);
    this.municipiovivienda = this.createBelongsToAccessorFor('municipiovivienda', municipioRepositoryGetter,);
    this.registerInclusionResolver('municipiovivienda', this.municipiovivienda.inclusionResolver);
    this.municipionacimiento = this.createBelongsToAccessorFor('municipionacimiento', municipioRepositoryGetter,);
    this.registerInclusionResolver('municipionacimiento', this.municipionacimiento.inclusionResolver);
  }
}
