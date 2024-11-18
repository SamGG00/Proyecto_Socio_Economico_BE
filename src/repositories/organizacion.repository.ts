import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Organizacion, OrganizacionRelations} from '../models';

export class OrganizacionRepository extends DefaultCrudRepository<
  Organizacion,
  typeof Organizacion.prototype.id,
  OrganizacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Organizacion, dataSource);
  }
}
