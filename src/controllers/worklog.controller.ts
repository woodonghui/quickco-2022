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
import {WorkLog} from '../models';
import {WorkLogRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@authenticate('jwt')
export class WorklogController {
  constructor(
    @repository(WorkLogRepository)
    public workLogRepository : WorkLogRepository,
  ) {}

  @post('/work-logs')
  @response(200, {
    description: 'WorkLog model instance',
    content: {'application/json': {schema: getModelSchemaRef(WorkLog)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkLog, {
            title: 'NewWorkLog',

          }),
        },
      },
    })
    workLog: WorkLog,
  ): Promise<WorkLog> {
    return this.workLogRepository.create(workLog);
  }

  @get('/work-logs/count')
  @response(200, {
    description: 'WorkLog model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WorkLog) where?: Where<WorkLog>,
  ): Promise<Count> {
    return this.workLogRepository.count(where);
  }

  @get('/work-logs')
  @response(200, {
    description: 'Array of WorkLog model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WorkLog, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WorkLog) filter?: Filter<WorkLog>,
  ): Promise<WorkLog[]> {
    return this.workLogRepository.find(filter);
  }

  @patch('/work-logs')
  @response(200, {
    description: 'WorkLog PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkLog, {partial: true}),
        },
      },
    })
    workLog: WorkLog,
    @param.where(WorkLog) where?: Where<WorkLog>,
  ): Promise<Count> {
    return this.workLogRepository.updateAll(workLog, where);
  }

  @get('/work-logs/{id}')
  @response(200, {
    description: 'WorkLog model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WorkLog, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WorkLog, {exclude: 'where'}) filter?: FilterExcludingWhere<WorkLog>
  ): Promise<WorkLog> {
    return this.workLogRepository.findById(id, filter);
  }

  @patch('/work-logs/{id}')
  @response(204, {
    description: 'WorkLog PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WorkLog, {partial: true}),
        },
      },
    })
    workLog: WorkLog,
  ): Promise<void> {
    await this.workLogRepository.updateById(id, workLog);
  }

  @put('/work-logs/{id}')
  @response(204, {
    description: 'WorkLog PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() workLog: WorkLog,
  ): Promise<void> {
    await this.workLogRepository.replaceById(id, workLog);
  }

  @del('/work-logs/{id}')
  @response(204, {
    description: 'WorkLog DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.workLogRepository.deleteById(id);
  }
}
