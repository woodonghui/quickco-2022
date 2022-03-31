import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {WorkLog, WorkLogRelations, Employee, Outlet, SaleRecord} from '../models';
import {EmployeeRepository} from './employee.repository';
import {OutletRepository} from './outlet.repository';
import {SaleRecordRepository} from './sale-record.repository';

export class WorkLogRepository extends DefaultCrudRepository<
  WorkLog,
  typeof WorkLog.prototype.id,
  WorkLogRelations
> {

  public readonly employee: BelongsToAccessor<Employee, typeof WorkLog.prototype.id>;

  public readonly outlet: BelongsToAccessor<Outlet, typeof WorkLog.prototype.id>;

  public readonly saleRecord: BelongsToAccessor<SaleRecord, typeof WorkLog.prototype.id>;

  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>, @repository.getter('OutletRepository') protected outletRepositoryGetter: Getter<OutletRepository>, @repository.getter('SaleRecordRepository') protected saleRecordRepositoryGetter: Getter<SaleRecordRepository>,
  ) {
    super(WorkLog, dataSource);
    this.saleRecord = this.createBelongsToAccessorFor('saleRecord', saleRecordRepositoryGetter,);
    this.registerInclusionResolver('saleRecord', this.saleRecord.inclusionResolver);
    this.outlet = this.createBelongsToAccessorFor('outlet', outletRepositoryGetter,);
    this.registerInclusionResolver('outlet', this.outlet.inclusionResolver);
    this.employee = this.createBelongsToAccessorFor('employee', employeeRepositoryGetter,);
    this.registerInclusionResolver('employee', this.employee.inclusionResolver);
  }
}
