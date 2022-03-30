import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { CostRecord, CostRecordRelations, Product } from '../models';
import { ProductRepository } from './product.repository';
export declare class CostRecordRepository extends DefaultCrudRepository<CostRecord, typeof CostRecord.prototype.id, CostRecordRelations> {
    protected productRepositoryGetter: Getter<ProductRepository>;
    readonly product: BelongsToAccessor<Product, typeof CostRecord.prototype.id>;
    constructor(dataSource: Quickco2022DataSource, productRepositoryGetter: Getter<ProductRepository>);
}
