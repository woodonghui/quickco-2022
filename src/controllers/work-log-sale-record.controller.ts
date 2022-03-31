import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  WorkLog,
  SaleRecord,
} from '../models';
import {WorkLogRepository} from '../repositories';

export class WorkLogSaleRecordController {
  constructor(
    @repository(WorkLogRepository)
    public workLogRepository: WorkLogRepository,
  ) { }

  @get('/work-logs/{id}/sale-record', {
    responses: {
      '200': {
        description: 'SaleRecord belonging to WorkLog',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SaleRecord)},
          },
        },
      },
    },
  })
  async getSaleRecord(
    @param.path.number('id') id: typeof WorkLog.prototype.id,
  ): Promise<SaleRecord> {
    return this.workLogRepository.saleRecord(id);
  }
}
