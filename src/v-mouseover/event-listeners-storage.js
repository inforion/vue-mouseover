"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allListeners = new WeakMap();
function rememberListeners(element, pair) {
    allListeners.set(element, pair);
}
exports.rememberListeners = rememberListeners;
function forgetListeners(element) {
    var _a;
    const pair = (_a = allListeners.get(element)) !== null && _a !== void 0 ? _a : null;
    allListeners.delete(element);
    return pair;
}
exports.forgetListeners = forgetListeners;
