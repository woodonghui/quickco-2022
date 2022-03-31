import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { WorkLog, WorkLogRelations, Employee, Outlet } from '../models';
import { EmployeeRepository } from './employee.repository';
import { OutletRepository } from './outlet.repository';
export declare class WorkLogRepository extends DefaultCrudRepository<WorkLog, typeof WorkLog.prototype.id, WorkLogRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    protected outletRepositoryGetter: Getter<OutletRepository>;
    readonly employee: BelongsToAccessor<Employee, typeof WorkLog.prototype.id>;
    readonly outlet: BelongsToAccessor<Outlet, typeof WorkLog.prototype.id>;
    constructor(dataSource: Quickco2022DataSource, employeeRepositoryGetter: Getter<EmployeeRepository>, outletRepositoryGetter: Getter<OutletRepository>);
}
