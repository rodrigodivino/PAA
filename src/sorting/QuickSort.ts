export default class QuickSort implements SortingAlgorithm {
    public array: number[]
    constructor(array: number[]){
        this.array = array
    }
    sort(): number[] {
        return []
    }

    protected partition(firstIndex: number, lastIndex:number): number{
        const x = this.array[lastIndex]
        let i = firstIndex - 1
        for(let j = firstIndex; j<lastIndex;j++){
            if(this.array[j] <= x){
                i++
                this.swap(i,j)
            }
        }
        this.swap(i+1, lastIndex)
        return i+1
    }

    protected swap(index1: number, index2:number): void{
        const aux = this.array[index1]
        this.array[index1] = this.array[index2]
        this.array[index2] = aux 
    }
}