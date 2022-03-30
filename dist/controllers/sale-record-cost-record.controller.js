"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRecordCostRecordController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SaleRecordCostRecordController = class SaleRecordCostRecordController {
    constructor(saleRecordRepository) {
        this.saleRecordRepository = saleRecordRepository;
    }
    async find(id, filter) {
        return this.saleRecordRepository.costRecords(id).find(filter);
    }
    async create(id, costRecord) {
        return this.saleRecordRepository.costRecords(id).create(costRecord);
    }
    async patch(id, costRecord, where) {
        return this.saleRecordRepository.costRecords(id).patch(costRecord, where);
    }
    async delete(id, where) {
        return this.saleRecordRepository.costRecords(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/sale-records/{id}/cost-records', {
        responses: {
            '200': {
                description: 'Array of SaleRecord has many CostRecord',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.CostRecord) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaleRecordCostRecordController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/sale-records/{id}/cost-records', {
        responses: {
            '200': {
                description: 'SaleRecord model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord, {
                    title: 'NewCostRecordInSaleRecord',
                    exclude: ['id'],
                    optional: ['salerecordid']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaleRecordCostRecordController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/sale-records/{id}/cost-records', {
        responses: {
            '200': {
                description: 'SaleRecord.CostRecord PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CostRecord, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.CostRecord))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaleRecordCostRecordController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/sale-records/{id}/cost-records', {
        responses: {
            '200': {
                description: 'SaleRecord.CostRecord DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.CostRecord))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SaleRecordCostRecordController.prototype, "delete", null);
SaleRecordCostRecordController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SaleRecordRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SaleRecordRepository])
], SaleRecordCostRecordController);
exports.SaleRecordCostRecordController = SaleRecordCostRecordController;
//# sourceMappingURL=sale-record-cost-record.controller.js.map