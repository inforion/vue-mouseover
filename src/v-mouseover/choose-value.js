"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const current_options_1 = require("../options/current-options");
const is_object_1 = __importDefault(require("../utils/is-object"));
function isSettingsLike(value) {
    return is_object_1.default(value);
}
function mouseEnterValue(valueDirective) {
    const value = valueDirective === null || valueDirective === void 0 ? void 0 : valueDirective.value;
    if (value === undefined) {
        return current_options_1.getOptions().defaultValues.noValueDirective.mouseenter;
    }
    if (!isSettingsLike(value)) {
        return value;
    }
    return value.mouseenter === undefined
        ? current_options_1.getOptions().defaultValues.hasValueDirective.mouseenter
        : value.mouseenter;
}
exports.mouseEnterValue = mouseEnterValue;
function mouseLeaveValue(valueDirective) {
    const value = valueDirective === null || valueDirective === void 0 ? void 0 : valueDirective.value;
    if (value === undefined) {
        return current_options_1.getOptions().defaultValues.noValueDirective.mouseleave;
    }
    return !isSettingsLike(value) || value.mouseleave === undefined
        ? current_options_1.getOptions().defaultValues.hasValueDirective.mouseleave
        : value.mouseleave;
}
exports.mouseLeaveValue = mouseLeaveValue;
