import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {OperationCost, OperationCostRelations} from '../models';

export class OperationCostRepository extends DefaultCrudRepository<
  OperationCost,
  typeof OperationCost.prototype.id,
  OperationCostRelations
> {
  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource,
  ) {
    super(OperationCost, dataSource);
  }
}
