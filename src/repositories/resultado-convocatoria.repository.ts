import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ProcesoConvocatoria, ProcesoConvocatoriaRelations} from '../models';

export class ProcesoConvocatoriaRepository extends DefaultCrudRepository<
  ProcesoConvocatoria,
  typeof ProcesoConvocatoria.prototype.id,
  ProcesoConvocatoriaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ProcesoConvocatoria, dataSource);
  }
}
