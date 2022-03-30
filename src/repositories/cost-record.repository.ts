import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {CostRecord, CostRecordRelations, Product} from '../models';
import {ProductRepository} from './product.repository';

export class CostRecordRepository extends DefaultCrudRepository<
  CostRecord,
  typeof CostRecord.prototype.id,
  CostRecordRelations
> {

  public readonly product: BelongsToAccessor<Product, typeof CostRecord.prototype.id>;

  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(CostRecord, dataSource);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter,);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
  }
}
