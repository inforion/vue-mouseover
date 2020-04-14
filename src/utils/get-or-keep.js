"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_get_1 = __importDefault(require("lodash.get"));
function getOrKeep(object, path) {
    return path.length === 0
        ? object
        : lodash_get_1.default(object, path);
}
exports.default = getOrKeep;
