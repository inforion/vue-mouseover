"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_topath_1 = __importDefault(require("lodash.topath"));
const vue_1 = __importDefault(require("vue"));
const names_1 = require("../names");
const extract_last_element_1 = __importDefault(require("../utils/extract-last-element"));
const get_or_keep_1 = __importDefault(require("../utils/get-or-keep"));
const is_array_1 = __importDefault(require("../utils/is-array"));
const is_object_1 = require("../utils/is-object");
function setValue(object, path, value) {
    const pathArray = lodash_topath_1.default(path);
    if (pathArray.length === 0) {
        throw new Error(`The path provided to v-${names_1.mouseoverName} directive is empty`);
    }
    const { last: property, rest: targetPath } = extract_last_element_1.default(pathArray);
    const target = get_or_keep_1.default(object, targetPath);
    if (is_object_1.isObjectNonStrict(target) && property in target) {
        target[property] = value;
    }
    else if (is_array_1.default(target)) {
        vue_1.default.set(target, property, value);
    }
    else {
        throw new Error(`The path [${path}] doesn't exist, please create it in Vue component's data object before using v-${names_1.mouseoverName} directive`);
    }
}
exports.default = setValue;
