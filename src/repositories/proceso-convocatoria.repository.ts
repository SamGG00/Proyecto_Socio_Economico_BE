import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ProcesoConvocatoria, ProcesoConvocatoriaRelations, Estudiante, Convocatoria} from '../models';
import {EstudianteRepository} from './estudiante.repository';
import {ConvocatoriaRepository} from './convocatoria.repository';

export class ProcesoConvocatoriaRepository extends DefaultCrudRepository<
  ProcesoConvocatoria,
  typeof ProcesoConvocatoria.prototype.id,
  ProcesoConvocatoriaRelations
> {

  public readonly estudiante: BelongsToAccessor<Estudiante, typeof ProcesoConvocatoria.prototype.id>;

  public readonly convocatoria: BelongsToAccessor<Convocatoria, typeof ProcesoConvocatoria.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('EstudianteRepository') protected estudianteRepositoryGetter: Getter<EstudianteRepository>, @repository.getter('ConvocatoriaRepository') protected convocatoriaRepositoryGetter: Getter<ConvocatoriaRepository>,
  ) {
    super(ProcesoConvocatoria, dataSource);
    this.convocatoria = this.createBelongsToAccessorFor('convocatoria', convocatoriaRepositoryGetter,);
    this.registerInclusionResolver('convocatoria', this.convocatoria.inclusionResolver);
    this.estudiante = this.createBelongsToAccessorFor('estudiante', estudianteRepositoryGetter,);
    this.registerInclusionResolver('estudiante', this.estudiante.inclusionResolver);
  }
}
