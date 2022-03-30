import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {Employee, EmployeeRelations} from '../models';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id,
  EmployeeRelations
> {
  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource,
  ) {
    super(Employee, dataSource);
  }
}
