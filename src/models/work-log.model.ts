import {Entity, model, property} from '@loopback/repository';

@model()
export class WorkLog extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  employeeid: number;

  @property({
    type: 'number',
    required: true,
  })
  outletid: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  worklog: number;


  constructor(data?: Partial<WorkLog>) {
    super(data);
  }
}

export interface WorkLogRelations {
  // describe navigational properties here
}

export type WorkLogWithRelations = WorkLog & WorkLogRelations;
