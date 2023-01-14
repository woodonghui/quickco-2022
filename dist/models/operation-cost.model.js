"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationCost = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let OperationCost = class OperationCost extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OperationCost.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OperationCost.prototype, "outlet", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OperationCost.prototype, "rental", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OperationCost.prototype, "levy", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OperationCost.prototype, "managementfee", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OperationCost.prototype, "salary", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OperationCost.prototype, "salaryshared", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        mysql: {
            dataType: 'float'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], OperationCost.prototype, "payoutratio", void 0);
OperationCost = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], OperationCost);
exports.OperationCost = OperationCost;
//# sourceMappingURL=operation-cost.model.js.map