import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { Product, ProductRelations, Supplier } from '../models';
import { SupplierRepository } from './supplier.repository';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.id, ProductRelations> {
    protected supplierRepositoryGetter: Getter<SupplierRepository>;
    readonly supplier: BelongsToAccessor<Supplier, typeof Product.prototype.id>;
    constructor(dataSource: Quickco2022DataSource, supplierRepositoryGetter: Getter<SupplierRepository>);
}
