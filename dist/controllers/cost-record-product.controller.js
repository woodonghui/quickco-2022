"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostRecordProductController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CostRecordProductController = class CostRecordProductController {
    constructor(costRecordRepository) {
        this.costRecordRepository = costRecordRepository;
    }
    async getProduct(id) {
        return this.costRecordRepository.product(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/cost-records/{id}/product', {
        responses: {
            '200': {
                description: 'Product belonging to CostRecord',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Product) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CostRecordProductController.prototype, "getProduct", null);
CostRecordProductController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.CostRecordRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.CostRecordRepository])
], CostRecordProductController);
exports.CostRecordProductController = CostRecordProductController;
//# sourceMappingURL=cost-record-product.controller.js.map