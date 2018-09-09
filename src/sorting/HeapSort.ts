import MaxHeap from "../data_structures/MaxHeap";

export default class HeapSort implements SortingAlgorithm{
    heap: Heap
    constructor(array: number[]){
        this.heap = new MaxHeap(array)
    }

    sort(): number[]{
        this.heap.buildMaxHeap()
        for(let i = this.heap.array.length-1; i>0;i--){
            this.heap.swap(0,i)
            this.heap.length--
            this.heap.peneira(0)
        }
        
        return this.heap.array
    }
}