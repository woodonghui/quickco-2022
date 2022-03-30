import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {Product, ProductRelations, Supplier} from '../models';
import {SupplierRepository} from './supplier.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  public readonly supplier: BelongsToAccessor<Supplier, typeof Product.prototype.id>;

  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource, @repository.getter('SupplierRepository') protected supplierRepositoryGetter: Getter<SupplierRepository>,
  ) {
    super(Product, dataSource);
    this.supplier = this.createBelongsToAccessorFor('supplier', supplierRepositoryGetter,);
    this.registerInclusionResolver('supplier', this.supplier.inclusionResolver);
  }
}
