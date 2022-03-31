import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { CostRecord, CostRecordRelations, Product, SaleRecord } from '../models';
import { ProductRepository } from './product.repository';
import { SaleRecordRepository } from './sale-record.repository';
export declare class CostRecordRepository extends DefaultCrudRepository<CostRecord, typeof CostRecord.prototype.id, CostRecordRelations> {
    protected productRepositoryGetter: Getter<ProductRepository>;
    protected saleRecordRepositoryGetter: Getter<SaleRecordRepository>;
    readonly product: BelongsToAccessor<Product, typeof CostRecord.prototype.id>;
    readonly saleRecord: BelongsToAccessor<SaleRecord, typeof CostRecord.prototype.id>;
    constructor(dataSource: Quickco2022DataSource, productRepositoryGetter: Getter<ProductRepository>, saleRecordRepositoryGetter: Getter<SaleRecordRepository>);
}
