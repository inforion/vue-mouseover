"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const current_options_1 = require("../options/current-options");
const is_mouse_over_1 = __importDefault(require("../utils/is-mouse-over"));
const event_listeners_pair_1 = __importDefault(require("./event-listeners-pair"));
const event_listeners_storage_1 = require("./event-listeners-storage");
const update_context_1 = require("./update-context");
function isContextDefined(vNode) {
    return vNode.context != null;
}
function inserted(element, binding, vNode) {
    if (!isContextDefined(vNode)) {
        return;
    }
    const onMouseEnter = () => update_context_1.assignMouseEnterValue(binding, vNode);
    const onMouseLeave = () => update_context_1.assignMouseLeaveValue(binding, vNode);
    event_listeners_storage_1.rememberListeners(element, new event_listeners_pair_1.default(onMouseEnter, onMouseLeave));
    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);
    if (!current_options_1.getOptions().immediate) {
        return;
    }
    if (is_mouse_over_1.default(element)) {
        update_context_1.assignMouseEnterValue(binding, vNode);
    }
    else {
        update_context_1.assignMouseLeaveValue(binding, vNode);
    }
}
function unbind(element) {
    const pair = event_listeners_storage_1.forgetListeners(element);
    if (pair == null) {
        return;
    }
    element.removeEventListener('mouseenter', pair.onMouseenter);
    element.removeEventListener('mouseleave', pair.onMouseleave);
}
exports.default = {
    inserted,
    unbind
};
