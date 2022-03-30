import { DefaultCrudRepository } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { Employee, EmployeeRelations } from '../models';
export declare class EmployeeRepository extends DefaultCrudRepository<Employee, typeof Employee.prototype.id, EmployeeRelations> {
    constructor(dataSource: Quickco2022DataSource);
}
