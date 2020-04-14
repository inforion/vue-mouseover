"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const names_1 = require("./names");
const current_options_1 = require("./options/current-options");
const v_mouseover_1 = __importDefault(require("./v-mouseover"));
const v_mouseover_value_1 = __importDefault(require("./v-mouseover-value"));
function install(vue, options) {
    current_options_1.setOptions(options);
    vue.directive(names_1.mouseoverValueName, v_mouseover_value_1.default);
    vue.directive(names_1.mouseoverName, v_mouseover_1.default);
}
exports.default = install;
