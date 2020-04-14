"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isObject(value) {
    return typeof value === 'object' && value != null && !Array.isArray(value);
}
exports.default = isObject;
function isObjectNonStrict(value) {
    return isObject(value);
}
exports.isObjectNonStrict = isObjectNonStrict;
