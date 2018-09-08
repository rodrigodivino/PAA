"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicHeap_1 = __importDefault(require("./BasicHeap"));
class MaxHeap extends BasicHeap_1.default {
    constructor(array) {
        super();
        this.array = array.slice();
        this.heapLength = array.length;
    }
    decreaseHeapLength() {
        this.heapLength--;
    }
    peneira(index) {
        //TODO: implementar de forma não-recursiva
    }
    buildMaxHeap() {
    }
}
exports.default = MaxHeap;
