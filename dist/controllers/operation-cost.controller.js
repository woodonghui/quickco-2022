"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationCostController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OperationCostController = class OperationCostController {
    constructor(operationCostRepository) {
        this.operationCostRepository = operationCostRepository;
    }
    async create(operationCost) {
        return this.operationCostRepository.create(operationCost);
    }
    async count(where) {
        return this.operationCostRepository.count(where);
    }
    async find(filter) {
        return this.operationCostRepository.find(filter);
    }
    async updateAll(operationCost, where) {
        return this.operationCostRepository.updateAll(operationCost, where);
    }
    async findById(id, filter) {
        return this.operationCostRepository.findById(id, filter);
    }
    async updateById(id, operationCost) {
        await this.operationCostRepository.updateById(id, operationCost);
    }
    async replaceById(id, operationCost) {
        await this.operationCostRepository.replaceById(id, operationCost);
    }
    async deleteById(id) {
        await this.operationCostRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/operation-costs'),
    (0, rest_1.response)(200, {
        description: 'OperationCost model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.OperationCost) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.OperationCost, {
                    title: 'NewOperationCost',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/operation-costs/count'),
    (0, rest_1.response)(200, {
        description: 'OperationCost model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.OperationCost)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/operation-costs'),
    (0, rest_1.response)(200, {
        description: 'Array of OperationCost model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.OperationCost, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.OperationCost)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/operation-costs'),
    (0, rest_1.response)(200, {
        description: 'OperationCost PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.OperationCost, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.OperationCost)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.OperationCost, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/operation-costs/{id}'),
    (0, rest_1.response)(200, {
        description: 'OperationCost model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.OperationCost, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.OperationCost, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/operation-costs/{id}'),
    (0, rest_1.response)(204, {
        description: 'OperationCost PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.OperationCost, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.OperationCost]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/operation-costs/{id}'),
    (0, rest_1.response)(204, {
        description: 'OperationCost PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.OperationCost]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/operation-costs/{id}'),
    (0, rest_1.response)(204, {
        description: 'OperationCost DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], OperationCostController.prototype, "deleteById", null);
OperationCostController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.OperationCostRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.OperationCostRepository])
], OperationCostController);
exports.OperationCostController = OperationCostController;
//# sourceMappingURL=operation-cost.controller.js.map