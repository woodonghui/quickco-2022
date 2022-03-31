import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { WorkLog, WorkLogRelations, Employee, Outlet, SaleRecord } from '../models';
import { EmployeeRepository } from './employee.repository';
import { OutletRepository } from './outlet.repository';
import { SaleRecordRepository } from './sale-record.repository';
export declare class WorkLogRepository extends DefaultCrudRepository<WorkLog, typeof WorkLog.prototype.id, WorkLogRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    protected outletRepositoryGetter: Getter<OutletRepository>;
    protected saleRecordRepositoryGetter: Getter<SaleRecordRepository>;
    readonly employee: BelongsToAccessor<Employee, typeof WorkLog.prototype.id>;
    readonly outlet: BelongsToAccessor<Outlet, typeof WorkLog.prototype.id>;
    readonly saleRecord: BelongsToAccessor<SaleRecord, typeof WorkLog.prototype.id>;
    constructor(dataSource: Quickco2022DataSource, employeeRepositoryGetter: Getter<EmployeeRepository>, outletRepositoryGetter: Getter<OutletRepository>, saleRecordRepositoryGetter: Getter<SaleRecordRepository>);
}
