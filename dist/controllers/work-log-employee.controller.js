"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkLogEmployeeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WorkLogEmployeeController = class WorkLogEmployeeController {
    constructor(workLogRepository) {
        this.workLogRepository = workLogRepository;
    }
    async getEmployee(id) {
        return this.workLogRepository.employee(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/work-logs/{id}/employee', {
        responses: {
            '200': {
                description: 'Employee belonging to WorkLog',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Employee) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorkLogEmployeeController.prototype, "getEmployee", null);
WorkLogEmployeeController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.WorkLogRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.WorkLogRepository])
], WorkLogEmployeeController);
exports.WorkLogEmployeeController = WorkLogEmployeeController;
//# sourceMappingURL=work-log-employee.controller.js.map