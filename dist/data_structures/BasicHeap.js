"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicHeap {
    parent(index) {
        return (Math.floor((index + 1) / 2)) - 1;
    }
    left(index) {
        return 1;
    }
    right(index) {
        return 1;
    }
}
exports.default = BasicHeap;
