import { Entity } from '@loopback/repository';
export declare class Employee extends Entity {
    fullname: string;
    id?: number;
    nickname: string;
    finno?: string;
    wpno?: string;
    joindate?: string;
    constructor(data?: Partial<Employee>);
}
export interface EmployeeRelations {
}
export declare type EmployeeWithRelations = Employee & EmployeeRelations;
