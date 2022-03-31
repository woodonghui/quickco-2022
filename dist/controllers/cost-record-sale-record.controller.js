"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostRecordSaleRecordController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CostRecordSaleRecordController = class CostRecordSaleRecordController {
    constructor(costRecordRepository) {
        this.costRecordRepository = costRecordRepository;
    }
    async getSaleRecord(id) {
        return this.costRecordRepository.saleRecord(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/cost-records/{id}/sale-record', {
        responses: {
            '200': {
                description: 'SaleRecord belonging to CostRecord',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.SaleRecord) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostRecordSaleRecordController.prototype, "getSaleRecord", null);
CostRecordSaleRecordController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CostRecordRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CostRecordRepository])
], CostRecordSaleRecordController);
exports.CostRecordSaleRecordController = CostRecordSaleRecordController;
//# sourceMappingURL=cost-record-sale-record.controller.js.map