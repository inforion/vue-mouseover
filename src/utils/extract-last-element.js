"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractLastElement(array) {
    if (array.length === 0) {
        throw new Error('Cannot remove last element from empty array');
    }
    const last = array.pop();
    return { last, rest: array };
}
exports.default = extractLastElement;
