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
  Employee,
} from '../models';
import {WorkLogRepository} from '../repositories';

export class WorkLogEmployeeController {
  constructor(
    @repository(WorkLogRepository)
    public workLogRepository: WorkLogRepository,
  ) { }

  @get('/work-logs/{id}/employee', {
    responses: {
      '200': {
        description: 'Employee belonging to WorkLog',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Employee)},
          },
        },
      },
    },
  })
  async getEmployee(
    @param.path.number('id') id: typeof WorkLog.prototype.id,
  ): Promise<Employee> {
    return this.workLogRepository.employee(id);
  }
}
