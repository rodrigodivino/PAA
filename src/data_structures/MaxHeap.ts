import BasicHeap from "./BasicHeap"
export default class MaxHeap extends BasicHeap implements Heap{
    array: number[]
    heapLength: number
    constructor(array: number[]){
        super()
        this.array = array.slice()
        this.heapLength = array.length
    }
    

    decreaseHeapLength(): void{
        this.heapLength--;
    }

    peneira(index:number): void{
        //TODO: implementar de forma não-recursiva
    }

    buildMaxHeap():void{

    }

}