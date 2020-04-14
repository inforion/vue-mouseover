"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const default_options_1 = __importDefault(require("./default-options"));
let currentOptions = lodash_merge_1.default({}, default_options_1.default);
function setOptions(options) {
    currentOptions = lodash_merge_1.default(default_options_1.default, options);
}
exports.setOptions = setOptions;
function getOptions() {
    return currentOptions;
}
exports.getOptions = getOptions;
