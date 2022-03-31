import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Product} from './product.model';
import {SaleRecord} from './sale-record.model';

@model()
export class CostRecord extends Entity {
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
    type: 'boolean',
    required: true,
  })
  paid: boolean;
  @property({
    type: 'number',
    required: true,
    mysql: {
      dataType: 'float'
    }
  })
  quantity: number;
  @property({
    type: 'boolean',
  })
  excludeincosting?: boolean;

  @property({
    type: 'number',
    mysql: {
      dataType: 'float'
    }
  })
  unitprice?: number;

  @property({
    type: 'number',
    mysql: {
      dataType: 'float'
    }
  })
  gst?: number;

  @belongsTo(() => Product, {name: 'product'})
  productid: number;

  @belongsTo(() => SaleRecord, {name: 'saleRecord'})
  salerecordid: number;

  constructor(data?: Partial<CostRecord>) {
    super(data);
  }
}

export interface CostRecordRelations {
  // describe navigational properties here
}

export type CostRecordWithRelations = CostRecord & CostRecordRelations;
