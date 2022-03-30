import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { SaleRecord, SaleRecordRelations, CostRecord } from '../models';
import { CostRecordRepository } from './cost-record.repository';
export declare class SaleRecordRepository extends DefaultCrudRepository<SaleRecord, typeof SaleRecord.prototype.id, SaleRecordRelations> {
    protected costRecordRepositoryGetter: Getter<CostRecordRepository>;
    readonly costRecords: HasManyRepositoryFactory<CostRecord, typeof SaleRecord.prototype.id>;
    constructor(dataSource: Quickco2022DataSource, costRecordRepositoryGetter: Getter<CostRecordRepository>);
}
