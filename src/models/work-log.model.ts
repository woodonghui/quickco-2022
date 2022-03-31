import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Employee} from './employee.model';
import {Outlet} from './outlet.model';

@model()
export class WorkLog extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
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

  @belongsTo(() => Employee, {name: 'employee'})
  employeeid: number;

  @belongsTo(() => Outlet, {name: 'outlet'})
  outletid: number;

  constructor(data?: Partial<WorkLog>) {
    super(data);
  }
}

export interface WorkLogRelations {
  // describe navigational properties here
}

export type WorkLogWithRelations = WorkLog & WorkLogRelations;
