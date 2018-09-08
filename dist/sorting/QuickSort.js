"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuickSort {
    constructor(array) {
        this.array = array.slice();
    }
    sort() {
        this.quickSort(0, this.array.length - 1);
        return this.array;
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
    quickSort(init, end) {
        if (init < end) {
            const pivotIndex = this.partition(init, end);
            this.quickSort(init, pivotIndex - 1);
            this.quickSort(pivotIndex + 1, end);
        }
    }
}
exports.default = QuickSort;
