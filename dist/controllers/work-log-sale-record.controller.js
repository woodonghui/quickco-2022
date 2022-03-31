"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkLogSaleRecordController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WorkLogSaleRecordController = class WorkLogSaleRecordController {
    constructor(workLogRepository) {
        this.workLogRepository = workLogRepository;
    }
    async getSaleRecord(id) {
        return this.workLogRepository.saleRecord(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/work-logs/{id}/sale-record', {
        responses: {
            '200': {
                description: 'SaleRecord belonging to WorkLog',
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
], WorkLogSaleRecordController.prototype, "getSaleRecord", null);
WorkLogSaleRecordController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.WorkLogRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.WorkLogRepository])
], WorkLogSaleRecordController);
exports.WorkLogSaleRecordController = WorkLogSaleRecordController;
//# sourceMappingURL=work-log-sale-record.controller.js.map