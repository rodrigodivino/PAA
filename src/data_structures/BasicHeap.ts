export default abstract class BasicHeap {
    abstract array: number[]
    
    parent(index:number): number {
        return (Math.floor((index+1)/2))-1
    }

    left(index:number):number {
        return 2*(index+1) - 1
    }

    right(index:number): number {
        return 2*(index+1)
    }

    swap(index1: number, index2: number): void{
        const aux = this.array[index1]
        this.array[index1] = this.array[index2]
        this.array[index2] = aux
    }
}