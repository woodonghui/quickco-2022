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
  Product,
} from '../models';
import {CostRecordRepository} from '../repositories';

export class CostRecordProductController {
  constructor(
    @repository(CostRecordRepository)
    public costRecordRepository: CostRecordRepository,
  ) { }

  @get('/cost-records/{id}/product', {
    responses: {
      '200': {
        description: 'Product belonging to CostRecord',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async getProduct(
    @param.path.number('id') id: typeof CostRecord.prototype.id,
  ): Promise<Product> {
    return this.costRecordRepository.product(id);
  }
}
