interface Heap {
    array: number[]
    length: number
    parent(index: number): number
    left(index: number): number
    right(index: number): number

    peneira(index: number): void
    buildMaxHeap(): void
}