import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  SaleRecord,
  CostRecord,
} from '../models';
import {SaleRecordRepository} from '../repositories';

export class SaleRecordCostRecordController {
  constructor(
    @repository(SaleRecordRepository) protected saleRecordRepository: SaleRecordRepository,
  ) { }

  @get('/sale-records/{id}/cost-records', {
    responses: {
      '200': {
        description: 'Array of SaleRecord has many CostRecord',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CostRecord)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<CostRecord>,
  ): Promise<CostRecord[]> {
    return this.saleRecordRepository.costRecords(id).find(filter);
  }

  @post('/sale-records/{id}/cost-records', {
    responses: {
      '200': {
        description: 'SaleRecord model instance',
        content: {'application/json': {schema: getModelSchemaRef(CostRecord)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof SaleRecord.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostRecord, {
            title: 'NewCostRecordInSaleRecord',
            exclude: ['id'],
            optional: ['salerecordid']
          }),
        },
      },
    }) costRecord: Omit<CostRecord, 'id'>,
  ): Promise<CostRecord> {
    return this.saleRecordRepository.costRecords(id).create(costRecord);
  }

  @patch('/sale-records/{id}/cost-records', {
    responses: {
      '200': {
        description: 'SaleRecord.CostRecord PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostRecord, {partial: true}),
        },
      },
    })
    costRecord: Partial<CostRecord>,
    @param.query.object('where', getWhereSchemaFor(CostRecord)) where?: Where<CostRecord>,
  ): Promise<Count> {
    return this.saleRecordRepository.costRecords(id).patch(costRecord, where);
  }

  @del('/sale-records/{id}/cost-records', {
    responses: {
      '200': {
        description: 'SaleRecord.CostRecord DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(CostRecord)) where?: Where<CostRecord>,
  ): Promise<Count> {
    return this.saleRecordRepository.costRecords(id).delete(where);
  }
}
