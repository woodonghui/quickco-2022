"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let EmployeeController = class EmployeeController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async create(employee) {
        return this.employeeRepository.create(employee);
    }
    async count(where) {
        return this.employeeRepository.count(where);
    }
    async find(filter) {
        return this.employeeRepository.find(filter);
    }
    async updateAll(employee, where) {
        return this.employeeRepository.updateAll(employee, where);
    }
    async findById(id, filter) {
        return this.employeeRepository.findById(id, filter);
    }
    async updateById(id, employee) {
        await this.employeeRepository.updateById(id, employee);
    }
    async replaceById(id, employee) {
        await this.employeeRepository.replaceById(id, employee);
    }
    async deleteById(id) {
        await this.employeeRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/employees'),
    (0, rest_1.response)(200, {
        description: 'Employee model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Employee) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, {
                    title: 'NewEmployee',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Employee]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/employees/count'),
    (0, rest_1.response)(200, {
        description: 'Employee model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Employee)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/employees'),
    (0, rest_1.response)(200, {
        description: 'Array of Employee model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Employee, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Employee)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/employees'),
    (0, rest_1.response)(200, {
        description: 'Employee PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Employee)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Employee, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/employees/{id}'),
    (0, rest_1.response)(200, {
        description: 'Employee model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Employee, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/employees/{id}'),
    (0, rest_1.response)(204, {
        description: 'Employee PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Employee, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Employee]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/employees/{id}'),
    (0, rest_1.response)(204, {
        description: 'Employee PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.Employee]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/employees/{id}'),
    (0, rest_1.response)(204, {
        description: 'Employee DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmployeeController.prototype, "deleteById", null);
EmployeeController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EmployeeRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EmployeeRepository])
], EmployeeController);
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.controller.js.map