"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (options) => (schema) => {
    const defaultOptions = {
        excludeDeleted: true
    };
    const mergedOptions = Object.assign({}, defaultOptions, options);
    const { excludeDeleted } = mergedOptions;
    schema.add({ deleted_at: { type: Date, default: null } });
    schema.pre("find", function () {
        const existingQuery = this.getQuery();
        const excludeDocQuery = Object.assign({}, existingQuery, { deleted_at: { $not: { $type: 9 } } });
        this.where(excludeDeleted ? excludeDocQuery : existingQuery);
    });
    schema.statics.softDeleteOne = function (condition, option) {
        return this.updateOne(condition, { $set: { deleted_at: new Date() } }, option);
    };
    schema.statics.softDeleteMany = function (condition, option) {
        return this.updateMany(condition, { $set: { deleted_at: new Date() } }, option);
    };
    schema.statics.restoreOne = function (condition, option) {
        return this.updateOne(condition, { $set: { deleted_at: null } }, option);
    };
    schema.statics.restoreMany = function (condition, option) {
        return this.updateMany(condition, { $set: { deleted_at: null } }, option);
    };
};
