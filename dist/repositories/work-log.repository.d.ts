import { DefaultCrudRepository } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { WorkLog, WorkLogRelations } from '../models';
export declare class WorkLogRepository extends DefaultCrudRepository<WorkLog, typeof WorkLog.prototype.id, WorkLogRelations> {
    constructor(dataSource: Quickco2022DataSource);
}
