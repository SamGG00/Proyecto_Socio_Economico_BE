import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Estudiante, EstudianteRelations, Municipio, Contacto} from '../models';
import {MunicipioRepository} from './municipio.repository';
import {ContactoRepository} from './contacto.repository';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.codigoestudiante,
  EstudianteRelations
> {

  public readonly municipionacimiento: BelongsToAccessor<Municipio, typeof Estudiante.prototype.codigoestudiante>;

  public readonly municipiovivienda: BelongsToAccessor<Municipio, typeof Estudiante.prototype.codigoestudiante>;

  public readonly contacto: BelongsToAccessor<Contacto, typeof Estudiante.prototype.codigoestudiante>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('MunicipioRepository') protected municipioRepositoryGetter: Getter<MunicipioRepository>, @repository.getter('ContactoRepository') protected contactoRepositoryGetter: Getter<ContactoRepository>,
  ) {
    super(Estudiante, dataSource);
    this.contacto = this.createBelongsToAccessorFor('contacto', contactoRepositoryGetter,);
    this.registerInclusionResolver('contacto', this.contacto.inclusionResolver);
    this.municipiovivienda = this.createBelongsToAccessorFor('municipiovivienda', municipioRepositoryGetter,);
    this.registerInclusionResolver('municipiovivienda', this.municipiovivienda.inclusionResolver);
    this.municipionacimiento = this.createBelongsToAccessorFor('municipionacimiento', municipioRepositoryGetter,);
    this.registerInclusionResolver('municipionacimiento', this.municipionacimiento.inclusionResolver);
  }
}
