import { DefaultCrudRepository } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { Outlet, OutletRelations } from '../models';
export declare class OutletRepository extends DefaultCrudRepository<Outlet, typeof Outlet.prototype.id, OutletRelations> {
    constructor(dataSource: Quickco2022DataSource);
}
