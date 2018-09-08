"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuickSort {
    constructor(array) {
        this.array = array;
    }
    sort() {
        return [];
    }
    partition(firstIndex, lastIndex) {
        const x = this.array[lastIndex];
        let i = firstIndex - 1;
        for (let j = firstIndex; j < lastIndex; j++) {
            if (this.array[j] <= x) {
                i++;
                this.swap(i, j);
            }
        }
        this.swap(i + 1, lastIndex);
        return i + 1;
    }
    swap(index1, index2) {
        const aux = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = aux;
    }
}
exports.default = QuickSort;
