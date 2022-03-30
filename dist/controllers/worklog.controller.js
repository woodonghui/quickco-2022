"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorklogController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WorklogController = class WorklogController {
    constructor(workLogRepository) {
        this.workLogRepository = workLogRepository;
    }
    async create(workLog) {
        return this.workLogRepository.create(workLog);
    }
    async count(where) {
        return this.workLogRepository.count(where);
    }
    async find(filter) {
        return this.workLogRepository.find(filter);
    }
    async updateAll(workLog, where) {
        return this.workLogRepository.updateAll(workLog, where);
    }
    async findById(id, filter) {
        return this.workLogRepository.findById(id, filter);
    }
    async updateById(id, workLog) {
        await this.workLogRepository.updateById(id, workLog);
    }
    async replaceById(id, workLog) {
        await this.workLogRepository.replaceById(id, workLog);
    }
    async deleteById(id) {
        await this.workLogRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/work-logs'),
    (0, rest_1.response)(200, {
        description: 'WorkLog model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.WorkLog) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkLog, {
                    title: 'NewWorkLog',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.WorkLog]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/work-logs/count'),
    (0, rest_1.response)(200, {
        description: 'WorkLog model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.WorkLog)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/work-logs'),
    (0, rest_1.response)(200, {
        description: 'Array of WorkLog model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.WorkLog, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.WorkLog)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/work-logs'),
    (0, rest_1.response)(200, {
        description: 'WorkLog PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkLog, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.WorkLog)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.WorkLog, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/work-logs/{id}'),
    (0, rest_1.response)(200, {
        description: 'WorkLog model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkLog, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.WorkLog, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/work-logs/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkLog PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkLog, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.WorkLog]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/work-logs/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkLog PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.WorkLog]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/work-logs/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkLog DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], WorklogController.prototype, "deleteById", null);
WorklogController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.WorkLogRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.WorkLogRepository])
], WorklogController);
exports.WorklogController = WorklogController;
//# sourceMappingURL=worklog.controller.js.map