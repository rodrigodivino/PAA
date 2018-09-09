interface Heap {
    array: number[]
    length: number
    parent(index: number): number
    left(index: number): number
    right(index: number): number
    swap(index1:number, index2:number):void

    peneira(index: number): void
    buildMaxHeap(): void
}