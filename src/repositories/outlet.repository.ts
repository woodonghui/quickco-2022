import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {Outlet, OutletRelations} from '../models';

export class OutletRepository extends DefaultCrudRepository<
  Outlet,
  typeof Outlet.prototype.id,
  OutletRelations
> {
  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource,
  ) {
    super(Outlet, dataSource);
  }
}
