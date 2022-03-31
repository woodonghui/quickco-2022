import { WorkLog, Employee } from '../models';
import { WorkLogRepository } from '../repositories';
export declare class WorkLogEmployeeController {
    workLogRepository: WorkLogRepository;
    constructor(workLogRepository: WorkLogRepository);
    getEmployee(id: typeof WorkLog.prototype.id): Promise<Employee>;
}
