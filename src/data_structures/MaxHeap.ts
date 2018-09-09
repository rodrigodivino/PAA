import BasicHeap from "./BasicHeap"
export default class MaxHeap extends BasicHeap implements Heap{
    array: number[]
    length: number
    constructor(array: number[], length = array.length){
        super()
        this.array = array.slice()
        this.length = length
    }
    

    

    peneira(index:number): void{
        while(this.left(index) < this.length){
            let max = this.left(index)
            if((max < this.length-1) && (this.array[max] < this.array[max+1])){
                max++
            }

            if(this.array[index] >= this.array[max]){
                index = this.length
            } else {
                this.swap(index,max)
                index = max
            }
        
        }
    }

    buildMaxHeap():void{
        for(let i = Math.floor(this.length/2)-1; i>=0; i--){
            this.peneira(i)
        }
    }

}