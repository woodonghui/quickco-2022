import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  CostRecord,
  SaleRecord,
} from '../models';
import {CostRecordRepository} from '../repositories';

export class CostRecordSaleRecordController {
  constructor(
    @repository(CostRecordRepository)
    public costRecordRepository: CostRecordRepository,
  ) { }

  @get('/cost-records/{id}/sale-record', {
    responses: {
      '200': {
        description: 'SaleRecord belonging to CostRecord',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SaleRecord)},
          },
        },
      },
    },
  })
  async getSaleRecord(
    @param.path.number('id') id: typeof CostRecord.prototype.id,
  ): Promise<SaleRecord> {
    return this.costRecordRepository.saleRecord(id);
  }
}
