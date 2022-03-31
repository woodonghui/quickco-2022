import { Entity } from '@loopback/repository';
export declare class WorkLog extends Entity {
    id?: number;
    date: string;
    worklog: number;
    employeeid: number;
    outletid: number;
    salerecordid: number;
    constructor(data?: Partial<WorkLog>);
}
export interface WorkLogRelations {
}
export declare type WorkLogWithRelations = WorkLog & WorkLogRelations;
