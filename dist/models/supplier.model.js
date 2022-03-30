"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const product_model_1 = require("./product.model");
let Supplier = class Supplier extends repository_1.Entity {
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
], Supplier.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Supplier.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Supplier.prototype, "contact", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Supplier.prototype, "fax", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Supplier.prototype, "gstnumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Supplier.prototype, "gstregistered", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Supplier.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Supplier.prototype, "telephone", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Supplier.prototype, "hasterm", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => product_model_1.Product, { keyTo: 'supplierid' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Supplier.prototype, "products", void 0);
Supplier = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Supplier);
exports.Supplier = Supplier;
//# sourceMappingURL=supplier.model.js.map