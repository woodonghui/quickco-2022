import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CostRecord} from '../models';
import {CostRecordRepository} from '../repositories';

export class CostrecordController {
  constructor(
    @repository(CostRecordRepository)
    public costRecordRepository : CostRecordRepository,
  ) {}

  @post('/cost-records')
  @response(200, {
    description: 'CostRecord model instance',
    content: {'application/json': {schema: getModelSchemaRef(CostRecord)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostRecord, {
            title: 'NewCostRecord',
            
          }),
        },
      },
    })
    costRecord: CostRecord,
  ): Promise<CostRecord> {
    return this.costRecordRepository.create(costRecord);
  }

  @get('/cost-records/count')
  @response(200, {
    description: 'CostRecord model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CostRecord) where?: Where<CostRecord>,
  ): Promise<Count> {
    return this.costRecordRepository.count(where);
  }

  @get('/cost-records')
  @response(200, {
    description: 'Array of CostRecord model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CostRecord, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CostRecord) filter?: Filter<CostRecord>,
  ): Promise<CostRecord[]> {
    return this.costRecordRepository.find(filter);
  }

  @patch('/cost-records')
  @response(200, {
    description: 'CostRecord PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostRecord, {partial: true}),
        },
      },
    })
    costRecord: CostRecord,
    @param.where(CostRecord) where?: Where<CostRecord>,
  ): Promise<Count> {
    return this.costRecordRepository.updateAll(costRecord, where);
  }

  @get('/cost-records/{id}')
  @response(200, {
    description: 'CostRecord model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CostRecord, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CostRecord, {exclude: 'where'}) filter?: FilterExcludingWhere<CostRecord>
  ): Promise<CostRecord> {
    return this.costRecordRepository.findById(id, filter);
  }

  @patch('/cost-records/{id}')
  @response(204, {
    description: 'CostRecord PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostRecord, {partial: true}),
        },
      },
    })
    costRecord: CostRecord,
  ): Promise<void> {
    await this.costRecordRepository.updateById(id, costRecord);
  }

  @put('/cost-records/{id}')
  @response(204, {
    description: 'CostRecord PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() costRecord: CostRecord,
  ): Promise<void> {
    await this.costRecordRepository.replaceById(id, costRecord);
  }

  @del('/cost-records/{id}')
  @response(204, {
    description: 'CostRecord DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.costRecordRepository.deleteById(id);
  }
}
