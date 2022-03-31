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
  Outlet,
} from '../models';
import {WorkLogRepository} from '../repositories';

export class WorkLogOutletController {
  constructor(
    @repository(WorkLogRepository)
    public workLogRepository: WorkLogRepository,
  ) { }

  @get('/work-logs/{id}/outlet', {
    responses: {
      '200': {
        description: 'Outlet belonging to WorkLog',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Outlet)},
          },
        },
      },
    },
  })
  async getOutlet(
    @param.path.number('id') id: typeof WorkLog.prototype.id,
  ): Promise<Outlet> {
    return this.workLogRepository.outlet(id);
  }
}
