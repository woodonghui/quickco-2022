import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Supplier} from './supplier.model';

@model()
export class Product extends Entity {
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
  sku?: string;
  @property({
    type: 'string',
  })
  unit?: string;

  @property({
    type: 'number',
    required: true,
    mysql: {
      dataType: 'float'
    }
  })
  unitprice: number;

  @property({
    type: 'boolean',
  })
  excludeincosting?: boolean;

  @belongsTo(() => Supplier, {name: 'supplier'})
  supplierid: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
