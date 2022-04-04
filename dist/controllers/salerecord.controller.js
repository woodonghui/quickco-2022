"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalerecordController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let SalerecordController = class SalerecordController {
    constructor(saleRecordRepository) {
        this.saleRecordRepository = saleRecordRepository;
    }
    async create(saleRecord) {
        return this.saleRecordRepository.create(saleRecord);
    }
    async count(where) {
        return this.saleRecordRepository.count(where);
    }
    async find(filter) {
        return this.saleRecordRepository.find(filter);
    }
    async updateAll(saleRecord, where) {
        return this.saleRecordRepository.updateAll(saleRecord, where);
    }
    async findById(id, filter) {
        return this.saleRecordRepository.findById(id, filter);
    }
    async updateById(id, saleRecord) {
        await this.saleRecordRepository.updateById(id, saleRecord);
    }
    async replaceById(id, saleRecord) {
        await this.saleRecordRepository.replaceById(id, saleRecord);
    }
    async deleteById(id) {
        await this.saleRecordRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/sale-records'),
    (0, rest_1.response)(200, {
        description: 'SaleRecord model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.SaleRecord) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SaleRecord, {
                    title: 'NewSaleRecord',
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.SaleRecord]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/sale-records/count'),
    (0, rest_1.response)(200, {
        description: 'SaleRecord model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.SaleRecord)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/sale-records'),
    (0, rest_1.response)(200, {
        description: 'Array of SaleRecord model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.SaleRecord, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.SaleRecord)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/sale-records'),
    (0, rest_1.response)(200, {
        description: 'SaleRecord PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SaleRecord, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.SaleRecord)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.SaleRecord, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/sale-records/{id}'),
    (0, rest_1.response)(200, {
        description: 'SaleRecord model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SaleRecord, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.SaleRecord, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/sale-records/{id}'),
    (0, rest_1.response)(204, {
        description: 'SaleRecord PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SaleRecord, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.SaleRecord]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/sale-records/{id}'),
    (0, rest_1.response)(204, {
        description: 'SaleRecord PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, models_1.SaleRecord]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/sale-records/{id}'),
    (0, rest_1.response)(204, {
        description: 'SaleRecord DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SalerecordController.prototype, "deleteById", null);
SalerecordController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SaleRecordRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SaleRecordRepository])
], SalerecordController);
exports.SalerecordController = SalerecordController;
//# sourceMappingURL=salerecord.controller.js.map