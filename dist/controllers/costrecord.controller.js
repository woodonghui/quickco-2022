"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostrecordController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CostrecordController = class CostrecordController {
    constructor(costRecordRepository) {
        this.costRecordRepository = costRecordRepository;
    }
    async create(costRecord) {
        return this.costRecordRepository.create(costRecord);
    }
    async count(where) {
        return this.costRecordRepository.count(where);
    }
    async find(filter) {
        return this.costRecordRepository.find(filter);
    }
    async updateAll(costRecord, where) {
        return this.costRecordRepository.updateAll(costRecord, where);
    }
    async findById(id, filter) {
        return this.costRecordRepository.findById(id, filter);
    }
    async updateById(id, costRecord) {
        await this.costRecordRepository.updateById(id, costRecord);
    }
    async replaceById(id, costRecord) {
        await this.costRecordRepository.replaceById(id, costRecord);
    }
    async deleteById(id) {
        await this.costRecordRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/cost-records'),
    (0, rest_1.response)(200, {
        description: 'CostRecord model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord, {
                    title: 'NewCostRecord',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.CostRecord]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/cost-records/count'),
    (0, rest_1.response)(200, {
        description: 'CostRecord model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.CostRecord)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/cost-records'),
    (0, rest_1.response)(200, {
        description: 'Array of CostRecord model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.CostRecord, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.CostRecord)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/cost-records'),
    (0, rest_1.response)(200, {
        description: 'CostRecord PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.CostRecord)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.CostRecord, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/cost-records/{id}'),
    (0, rest_1.response)(200, {
        description: 'CostRecord model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.CostRecord, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/cost-records/{id}'),
    (0, rest_1.response)(204, {
        description: 'CostRecord PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.CostRecord]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/cost-records/{id}'),
    (0, rest_1.response)(204, {
        description: 'CostRecord PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.CostRecord]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/cost-records/{id}'),
    (0, rest_1.response)(204, {
        description: 'CostRecord DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostrecordController.prototype, "deleteById", null);
CostrecordController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CostRecordRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CostRecordRepository])
], CostrecordController);
exports.CostrecordController = CostrecordController;
//# sourceMappingURL=costrecord.controller.js.map