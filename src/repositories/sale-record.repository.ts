import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Quickco2022DataSource} from '../datasources';
import {SaleRecord, SaleRecordRelations, CostRecord} from '../models';
import {CostRecordRepository} from './cost-record.repository';

export class SaleRecordRepository extends DefaultCrudRepository<
  SaleRecord,
  typeof SaleRecord.prototype.id,
  SaleRecordRelations
> {

  public readonly costRecords: HasManyRepositoryFactory<CostRecord, typeof SaleRecord.prototype.id>;

  constructor(
    @inject('datasources.quickco2022') dataSource: Quickco2022DataSource, @repository.getter('CostRecordRepository') protected costRecordRepositoryGetter: Getter<CostRecordRepository>,
  ) {
    super(SaleRecord, dataSource);
    this.costRecords = this.createHasManyRepositoryFactoryFor('costRecords', costRecordRepositoryGetter,);
    this.registerInclusionResolver('costRecords', this.costRecords.inclusionResolver);
  }
}
