import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Quickco2022DataSource } from '../datasources';
import { Supplier, SupplierRelations, Product } from '../models';
import { ProductRepository } from './product.repository';
export declare class SupplierRepository extends DefaultCrudRepository<Supplier, typeof Supplier.prototype.id, SupplierRelations> {
    protected productRepositoryGetter: Getter<ProductRepository>;
    readonly products: HasManyRepositoryFactory<Product, typeof Supplier.prototype.id>;
    constructor(dataSource: Quickco2022DataSource, productRepositoryGetter: Getter<ProductRepository>);
}
