"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InsertionSort {
    constructor(array) {
        this.array = array.slice();
    }
    sort() {
        for (let i = 1; i < this.array.length; i++) {
            let key = this.array[i];
            let j = i - 1;
            while (j >= 0 && this.array[j] > key) {
                this.array[j + 1] = this.array[j];
                j--;
            }
            this.array[j + 1] = key;
        }
        return this.array;
    }
}
exports.default = InsertionSort;
