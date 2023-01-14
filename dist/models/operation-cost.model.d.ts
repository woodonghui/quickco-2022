import { Entity } from '@loopback/repository';
export declare class OperationCost extends Entity {
    id?: number;
    outlet: string;
    rental: number;
    levy: number;
    managementfee: number;
    salary: number;
    salaryshared: number;
    payoutratio: number;
    constructor(data?: Partial<OperationCost>);
}
export interface OperationCostRelations {
}
export declare type OperationCostWithRelations = OperationCost & OperationCostRelations;
