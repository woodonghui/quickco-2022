import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { WorkLog } from '../models';
import { WorkLogRepository } from '../repositories';
export declare class WorklogController {
    workLogRepository: WorkLogRepository;
    constructor(workLogRepository: WorkLogRepository);
    create(workLog: WorkLog): Promise<WorkLog>;
    count(where?: Where<WorkLog>): Promise<Count>;
    find(filter?: Filter<WorkLog>): Promise<WorkLog[]>;
    updateAll(workLog: WorkLog, where?: Where<WorkLog>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<WorkLog>): Promise<WorkLog>;
    updateById(id: number, workLog: WorkLog): Promise<void>;
    replaceById(id: number, workLog: WorkLog): Promise<void>;
    deleteById(id: number): Promise<void>;
}
