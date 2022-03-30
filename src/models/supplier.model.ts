import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';

@model()
export class Supplier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  contact?: string;

  @property({
    type: 'string',
  })
  fax?: string;

  @property({
    type: 'string',
  })
  gstnumber?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  gstregistered: boolean;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  telephone?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  hasterm: boolean;

  @hasMany(() => Product, {keyTo: 'supplierid'})
  products: Product[];

  constructor(data?: Partial<Supplier>) {
    super(data);
  }
}

export interface SupplierRelations {
  // describe navigational properties here
}

export type SupplierWithRelations = Supplier & SupplierRelations;
