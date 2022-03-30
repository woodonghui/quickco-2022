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
import {Outlet} from '../models';
import {OutletRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@authenticate('jwt')
export class OutletController {
  constructor(
    @repository(OutletRepository)
    public outletRepository : OutletRepository,
  ) {}

  @post('/outlets')
  @response(200, {
    description: 'Outlet model instance',
    content: {'application/json': {schema: getModelSchemaRef(Outlet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Outlet, {
            title: 'NewOutlet',

          }),
        },
      },
    })
    outlet: Outlet,
  ): Promise<Outlet> {
    return this.outletRepository.create(outlet);
  }

  @get('/outlets/count')
  @response(200, {
    description: 'Outlet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Outlet) where?: Where<Outlet>,
  ): Promise<Count> {
    return this.outletRepository.count(where);
  }

  @get('/outlets')
  @response(200, {
    description: 'Array of Outlet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Outlet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Outlet) filter?: Filter<Outlet>,
  ): Promise<Outlet[]> {
    return this.outletRepository.find(filter);
  }

  @patch('/outlets')
  @response(200, {
    description: 'Outlet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Outlet, {partial: true}),
        },
      },
    })
    outlet: Outlet,
    @param.where(Outlet) where?: Where<Outlet>,
  ): Promise<Count> {
    return this.outletRepository.updateAll(outlet, where);
  }

  @get('/outlets/{id}')
  @response(200, {
    description: 'Outlet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Outlet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Outlet, {exclude: 'where'}) filter?: FilterExcludingWhere<Outlet>
  ): Promise<Outlet> {
    return this.outletRepository.findById(id, filter);
  }

  @patch('/outlets/{id}')
  @response(204, {
    description: 'Outlet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Outlet, {partial: true}),
        },
      },
    })
    outlet: Outlet,
  ): Promise<void> {
    await this.outletRepository.updateById(id, outlet);
  }

  @put('/outlets/{id}')
  @response(204, {
    description: 'Outlet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() outlet: Outlet,
  ): Promise<void> {
    await this.outletRepository.replaceById(id, outlet);
  }

  @del('/outlets/{id}')
  @response(204, {
    description: 'Outlet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.outletRepository.deleteById(id);
  }
}
