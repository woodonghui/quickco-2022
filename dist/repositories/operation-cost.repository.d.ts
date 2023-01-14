import { DefaultCrudRepository } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { OperationCost, OperationCostRelations } from '../models';
export declare class OperationCostRepository extends DefaultCrudRepository<OperationCost, typeof OperationCost.prototype.id, OperationCostRelations> {
    constructor(dataSource: Quickco2022DataSource);
}
