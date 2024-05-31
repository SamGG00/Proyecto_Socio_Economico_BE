import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Convocatoria, ConvocatoriaRelations} from '../models';

export class ConvocatoriaRepository extends DefaultCrudRepository<
  Convocatoria,
  typeof Convocatoria.prototype.id,
  ConvocatoriaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Convocatoria, dataSource);
  }
}
