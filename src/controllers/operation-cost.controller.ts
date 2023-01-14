import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {OperationCost} from '../models';
import {OperationCostRepository} from '../repositories';

@authenticate('jwt')
export class OperationCostController {
  constructor(
    @repository(OperationCostRepository)
    public operationCostRepository: OperationCostRepository,
  ) { }

  @post('/operation-costs')
  @response(200, {
    description: 'OperationCost model instance',
    content: {'application/json': {schema: getModelSchemaRef(OperationCost)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OperationCost, {
            title: 'NewOperationCost',
            exclude: ['id'],
          }),
        },
      },
    })
    operationCost: Omit<OperationCost, 'id'>,
  ): Promise<OperationCost> {
    return this.operationCostRepository.create(operationCost);
  }

  @get('/operation-costs/count')
  @response(200, {
    description: 'OperationCost model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(OperationCost) where?: Where<OperationCost>,
  ): Promise<Count> {
    return this.operationCostRepository.count(where);
  }

  @get('/operation-costs')
  @response(200, {
    description: 'Array of OperationCost model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(OperationCost, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(OperationCost) filter?: Filter<OperationCost>,
  ): Promise<OperationCost[]> {
    return this.operationCostRepository.find(filter);
  }

  @patch('/operation-costs')
  @response(200, {
    description: 'OperationCost PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OperationCost, {partial: true}),
        },
      },
    })
    operationCost: OperationCost,
    @param.where(OperationCost) where?: Where<OperationCost>,
  ): Promise<Count> {
    return this.operationCostRepository.updateAll(operationCost, where);
  }

  @get('/operation-costs/{id}')
  @response(200, {
    description: 'OperationCost model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(OperationCost, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OperationCost, {exclude: 'where'}) filter?: FilterExcludingWhere<OperationCost>
  ): Promise<OperationCost> {
    return this.operationCostRepository.findById(id, filter);
  }

  @patch('/operation-costs/{id}')
  @response(204, {
    description: 'OperationCost PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OperationCost, {partial: true}),
        },
      },
    })
    operationCost: OperationCost,
  ): Promise<void> {
    await this.operationCostRepository.updateById(id, operationCost);
  }

  @put('/operation-costs/{id}')
  @response(204, {
    description: 'OperationCost PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() operationCost: OperationCost,
  ): Promise<void> {
    await this.operationCostRepository.replaceById(id, operationCost);
  }

  @del('/operation-costs/{id}')
  @response(204, {
    description: 'OperationCost DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.operationCostRepository.deleteById(id);
  }
}
