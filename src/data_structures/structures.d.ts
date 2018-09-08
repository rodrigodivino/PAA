interface Heap {
    array: number[]
    heapLength: number
    parent(index: number): number
    left(index: number): number
    right(index: number): number

    peneira(index: number, endHeap: number): void
    buildMaxHeap(endHeap: number): void
}