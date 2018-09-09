"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MaxHeap_1 = __importDefault(require("../data_structures/MaxHeap"));
class HeapSort {
    constructor(array) {
        this.heap = new MaxHeap_1.default(array);
    }
    sort() {
        this.heap.buildMaxHeap();
        for (let i = this.heap.array.length - 1; i > 0; i--) {
            this.heap.swap(0, i);
            this.heap.length--;
            this.heap.peneira(0);
        }
        return this.heap.array;
    }
}
exports.default = HeapSort;
