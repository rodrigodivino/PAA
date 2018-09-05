export default class InsertionSort implements SortingAlgorithm{
    public array: number[];
    constructor(array: number[]){
        this.array = array.slice();
    }

    sort() : number[]{
        for (let i=1; i<this.array.length; i++){
            let key = this.array[i]
            let j = i - 1

            while (j>=0 && this.array[j] > key){
                this.array[j+1] = this.array[j]
                j--
            }

            this.array[j+1] = key
        } 
        return this.array
    }

}