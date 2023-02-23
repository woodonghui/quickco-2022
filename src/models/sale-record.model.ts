import {Entity, hasMany, model, property} from '@loopback/repository';
import {CostRecord} from './cost-record.model';

@model()
export class SaleRecord extends Entity {
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
  bankincash: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  foodpandaincome: number;

  @property({
    type: 'number',
    required: true,
  })
  outletid: number;

  @property({
    type: 'number',
    required: true,
  })
  totalincome: number;

  @property({
    type: 'number',
  })
  grabincome?: number;

  @property({
    type: 'number',
    mysql: {
      dataType: 'float'
    }
  })
  grabpay?: number;

  @property({
    type: 'number',
    mysql: {
      dataType: 'float'
    }
  })
  cdcincome?: number;

  @hasMany(() => CostRecord, {keyTo: 'salerecordid'})
  costRecords: CostRecord[];

  constructor(data?: Partial<SaleRecord>) {
    super(data);
  }
}

export interface SaleRecordRelations {
  // describe navigational properties here
}

export type SaleRecordWithRelations = SaleRecord & SaleRecordRelations;
