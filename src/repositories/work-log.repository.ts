import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {WorkLog, WorkLogRelations} from '../models';

export class WorkLogRepository extends DefaultCrudRepository<
  WorkLog,
  typeof WorkLog.prototype.id,
  WorkLogRelations
> {
  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource,
  ) {
    super(WorkLog, dataSource);
  }
}
