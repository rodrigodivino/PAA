export default abstract class BasicHeap {
    parent(index:number): number {
        return (Math.floor((index+1)/2))-1
    }

    left(index:number):number {
        return 1
    }

    right(index:number): number {
        return 1
    }
}