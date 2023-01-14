import {Entity, model, property} from '@loopback/repository';

@model()
export class OperationCost extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  outlet: string;

  @property({
    type: 'number',
    required: true,
  })
  rental: number;

  @property({
    type: 'number',
    required: true,
  })
  levy: number;

  @property({
    type: 'number',
    required: true,
  })
  managementfee: number;

  @property({
    type: 'number',
    required: true,
  })
  salary: number;

  @property({
    type: 'number',
    required: true,
  })
  salaryshared: number;

  @property({
    type: 'number',
    required: true,
    mysql: {
      dataType: 'float'
    }
  })
  payoutratio: number;


  constructor(data?: Partial<OperationCost>) {
    super(data);
  }
}

export interface OperationCostRelations {
  // describe navigational properties here
}

export type OperationCostWithRelations = OperationCost & OperationCostRelations;
