import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { OperationCost } from '../models';
import { OperationCostRepository } from '../repositories';
export declare class OperationCostController {
    operationCostRepository: OperationCostRepository;
    constructor(operationCostRepository: OperationCostRepository);
    create(operationCost: Omit<OperationCost, 'id'>): Promise<OperationCost>;
    count(where?: Where<OperationCost>): Promise<Count>;
    find(filter?: Filter<OperationCost>): Promise<OperationCost[]>;
    updateAll(operationCost: OperationCost, where?: Where<OperationCost>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<OperationCost>): Promise<OperationCost>;
    updateById(id: number, operationCost: OperationCost): Promise<void>;
    replaceById(id: number, operationCost: OperationCost): Promise<void>;
    deleteById(id: number): Promise<void>;
}
