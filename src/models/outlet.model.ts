import {Entity, model, property} from '@loopback/repository';

@model()
export class Outlet extends Entity {
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
  name: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  contact?: string;


  constructor(data?: Partial<Outlet>) {
    super(data);
  }
}

export interface OutletRelations {
  // describe navigational properties here
}

export type OutletWithRelations = Outlet & OutletRelations;
