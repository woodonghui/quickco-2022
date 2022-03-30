"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostRecord = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const product_model_1 = require("./product.model");
let CostRecord = class CostRecord extends repository_1.Entity {
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
], CostRecord.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], CostRecord.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CostRecord.prototype, "paid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        mysql: {
            dataType: 'float'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CostRecord.prototype, "quantity", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CostRecord.prototype, "salerecordid", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CostRecord.prototype, "excludeincosting", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        mysql: {
            dataType: 'float'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CostRecord.prototype, "unitprice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        mysql: {
            dataType: 'float'
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], CostRecord.prototype, "gst", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => product_model_1.Product, { name: 'product' }),
    (0, tslib_1.__metadata)("design:type", Number)
], CostRecord.prototype, "productid", void 0);
CostRecord = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], CostRecord);
exports.CostRecord = CostRecord;
//# sourceMappingURL=cost-record.model.js.map