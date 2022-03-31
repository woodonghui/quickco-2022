import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {CostRecord, CostRecordRelations, Product, SaleRecord} from '../models';
import {ProductRepository} from './product.repository';
import {SaleRecordRepository} from './sale-record.repository';

export class CostRecordRepository extends DefaultCrudRepository<
  CostRecord,
  typeof CostRecord.prototype.id,
  CostRecordRelations
> {

  public readonly product: BelongsToAccessor<Product, typeof CostRecord.prototype.id>;

  public readonly saleRecord: BelongsToAccessor<SaleRecord, typeof CostRecord.prototype.id>;

  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('SaleRecordRepository') protected saleRecordRepositoryGetter: Getter<SaleRecordRepository>,
  ) {
    super(CostRecord, dataSource);
    this.saleRecord = this.createBelongsToAccessorFor('saleRecord', saleRecordRepositoryGetter,);
    this.registerInclusionResolver('saleRecord', this.saleRecord.inclusionResolver);
    this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter,);
    this.registerInclusionResolver('product', this.product.inclusionResolver);
  }
}
