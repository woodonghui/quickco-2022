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
import {SaleRecord} from '../models';
import {SaleRecordRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@authenticate('jwt')
export class SalerecordController {
  constructor(
    @repository(SaleRecordRepository)
    public saleRecordRepository : SaleRecordRepository,
  ) {}

  @post('/sale-records')
  @response(200, {
    description: 'SaleRecord model instance',
    content: {'application/json': {schema: getModelSchemaRef(SaleRecord)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SaleRecord, {
            title: 'NewSaleRecord',

          }),
        },
      },
    })
    saleRecord: SaleRecord,
  ): Promise<SaleRecord> {
    return this.saleRecordRepository.create(saleRecord);
  }

  @get('/sale-records/count')
  @response(200, {
    description: 'SaleRecord model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SaleRecord) where?: Where<SaleRecord>,
  ): Promise<Count> {
    return this.saleRecordRepository.count(where);
  }

  @get('/sale-records')
  @response(200, {
    description: 'Array of SaleRecord model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SaleRecord, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SaleRecord) filter?: Filter<SaleRecord>,
  ): Promise<SaleRecord[]> {
    return this.saleRecordRepository.find(filter);
  }

  @patch('/sale-records')
  @response(200, {
    description: 'SaleRecord PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SaleRecord, {partial: true}),
        },
      },
    })
    saleRecord: SaleRecord,
    @param.where(SaleRecord) where?: Where<SaleRecord>,
  ): Promise<Count> {
    return this.saleRecordRepository.updateAll(saleRecord, where);
  }

  @get('/sale-records/{id}')
  @response(200, {
    description: 'SaleRecord model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SaleRecord, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SaleRecord, {exclude: 'where'}) filter?: FilterExcludingWhere<SaleRecord>
  ): Promise<SaleRecord> {
    return this.saleRecordRepository.findById(id, filter);
  }

  @patch('/sale-records/{id}')
  @response(204, {
    description: 'SaleRecord PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SaleRecord, {partial: true}),
        },
      },
    })
    saleRecord: SaleRecord,
  ): Promise<void> {
    await this.saleRecordRepository.updateById(id, saleRecord);
  }

  @put('/sale-records/{id}')
  @response(204, {
    description: 'SaleRecord PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() saleRecord: SaleRecord,
  ): Promise<void> {
    await this.saleRecordRepository.replaceById(id, saleRecord);
  }

  @del('/sale-records/{id}')
  @response(204, {
    description: 'SaleRecord DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.saleRecordRepository.deleteById(id);
  }
}
