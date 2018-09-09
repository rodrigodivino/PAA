"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicHeap_1 = __importDefault(require("./BasicHeap"));
class MaxHeap extends BasicHeap_1.default {
    constructor(array, length = array.length) {
        super();
        this.array = array.slice();
        this.length = length;
    }
    peneira(index) {
        while (this.left(index) < this.length) {
            let max = this.left(index);
            if ((max < this.length - 1) && (this.array[max] < this.array[max + 1])) {
                max++;
            }
            if (this.array[index] >= max) {
                index = this.length;
            }
            else {
                this.swap(index, max);
                index = max;
            }
        }
    }
    buildMaxHeap() {
    }
}
exports.default = MaxHeap;
