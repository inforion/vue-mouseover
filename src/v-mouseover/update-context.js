"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const names_1 = require("../names");
const choose_value_1 = require("./choose-value");
const set_value_1 = __importDefault(require("./set-value"));
function findValueDirective(vNode) {
    var _a, _b, _c;
    return (_c = (_b = (_a = vNode.data) === null || _a === void 0 ? void 0 : _a.directives) === null || _b === void 0 ? void 0 : _b.find((x) => x.name === names_1.mouseoverValueName)) !== null && _c !== void 0 ? _c : null;
}
function updateContext(binding, vNode, chooseValue) {
    const valueDirective = findValueDirective(vNode);
    const value = chooseValue(valueDirective);
    set_value_1.default(vNode.context.$data, binding.expression, value);
}
function assignMouseEnterValue(binding, vNode) {
    return updateContext(binding, vNode, choose_value_1.mouseEnterValue);
}
exports.assignMouseEnterValue = assignMouseEnterValue;
function assignMouseLeaveValue(binding, vNode) {
    return updateContext(binding, vNode, choose_value_1.mouseLeaveValue);
}
exports.assignMouseLeaveValue = assignMouseLeaveValue;
