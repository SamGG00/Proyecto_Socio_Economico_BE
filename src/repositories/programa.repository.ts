import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Programa, ProgramaRelations} from '../models';

export class ProgramaRepository extends DefaultCrudRepository<
  Programa,
  typeof Programa.prototype.id,
  ProgramaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Programa, dataSource);
  }
}
