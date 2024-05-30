import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Contacto, Estudiante, EstudianteRelations, Municipio, Programa} from '../models';
import {ContactoRepository} from './contacto.repository';
import {MunicipioRepository} from './municipio.repository';
import {ProgramaRepository} from './programa.repository';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.Codigo_Estudiante,
  EstudianteRelations
> {

  public readonly municipionacimiento: BelongsToAccessor<Municipio, typeof Estudiante.prototype.Codigo_Estudiante>;

  public readonly municipiovivienda: BelongsToAccessor<Municipio, typeof Estudiante.prototype.Codigo_Estudiante>;

  public readonly contacto: BelongsToAccessor<Contacto, typeof Estudiante.prototype.Codigo_Estudiante>;

  public readonly programa: BelongsToAccessor<Programa, typeof Estudiante.prototype.Codigo_Estudiante>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('MunicipioRepository') protected municipioRepositoryGetter: Getter<MunicipioRepository>, @repository.getter('ContactoRepository') protected contactoRepositoryGetter: Getter<ContactoRepository>, @repository.getter('ProgramaRepository') protected programaRepositoryGetter: Getter<ProgramaRepository>,
  ) {
    super(Estudiante, dataSource);
    this.programa = this.createBelongsToAccessorFor('programa', programaRepositoryGetter,);
    this.registerInclusionResolver('programa', this.programa.inclusionResolver);
    this.contacto = this.createBelongsToAccessorFor('contacto', contactoRepositoryGetter,);
    this.registerInclusionResolver('contacto', this.contacto.inclusionResolver);
    this.municipiovivienda = this.createBelongsToAccessorFor('municipiovivienda', municipioRepositoryGetter,);
    this.registerInclusionResolver('municipiovivienda', this.municipiovivienda.inclusionResolver);
    this.municipionacimiento = this.createBelongsToAccessorFor('municipionacimiento', municipioRepositoryGetter,);
    this.registerInclusionResolver('municipionacimiento', this.municipionacimiento.inclusionResolver);
  }
}
