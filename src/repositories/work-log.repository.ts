import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {WorkLog, WorkLogRelations, Employee, Outlet} from '../models';
import {EmployeeRepository} from './employee.repository';
import {OutletRepository} from './outlet.repository';

export class WorkLogRepository extends DefaultCrudRepository<
  WorkLog,
  typeof WorkLog.prototype.id,
  WorkLogRelations
> {

  public readonly employee: BelongsToAccessor<Employee, typeof WorkLog.prototype.id>;

  public readonly outlet: BelongsToAccessor<Outlet, typeof WorkLog.prototype.id>;

  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>, @repository.getter('OutletRepository') protected outletRepositoryGetter: Getter<OutletRepository>,
  ) {
    super(WorkLog, dataSource);
    this.outlet = this.createBelongsToAccessorFor('outlet', outletRepositoryGetter,);
    this.registerInclusionResolver('outlet', this.outlet.inclusionResolver);
    this.employee = this.createBelongsToAccessorFor('employee', employeeRepositoryGetter,);
    this.registerInclusionResolver('employee', this.employee.inclusionResolver);
  }
}
