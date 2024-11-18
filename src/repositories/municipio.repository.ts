import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Municipio, MunicipioRelations} from '../models';

export class MunicipioRepository extends DefaultCrudRepository<
  Municipio,
  typeof Municipio.prototype.id,
  MunicipioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Municipio, dataSource);
  }
}
