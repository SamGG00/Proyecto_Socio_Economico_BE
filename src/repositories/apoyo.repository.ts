import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Apoyo, ApoyoRelations} from '../models';

export class ApoyoRepository extends DefaultCrudRepository<
  Apoyo,
  typeof Apoyo.prototype.id,
  ApoyoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Apoyo, dataSource);
  }
}
