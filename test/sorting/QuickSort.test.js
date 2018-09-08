const {assert} = require('chai')
const sut = require('../../dist/sorting/QuickSort').default

describe('QuickSort', function(){
    describe('Constructor', function(){
        it('Should not modify the input array', function(){
            const array = [1,4,2,3,6,1,7]
            const quicksort = new sut(array)
            assert.sameOrderedMembers(array, quicksort.array)
        })
    })

    describe('Swap', function(){
        it('Should swap the indexes on the array', function(){
            const array = [1,2,5,4,3]
            const quicksort = new sut(array)
            quicksort.swap(2,4)

            assert.equal(quicksort.array[2], 3)
            assert.equal(quicksort.array[4], 5)
        })
    })
    describe('Partition', function(){
        it('Should find the correct location for the pivot', function(){
            const array = [6,5,3,7,2,1,4]
            const quicksort = new sut(array)
            const index = quicksort.partition(0, 6)

            assert.equal(index, 3)
        })
    })

    describe('QuickSort', function(){
        it('Should sort the whole array when specified', function(){
            const array = [1,4,2,3,6,5,1,4];
            const sorted = array.sort((a,b) => a-b)

            const quicksort = new sut(array);
            quicksort.quickSort(0,array.length-1)

            assert.sameOrderedMembers(quicksort.array, sorted)
        })

        it('Should sort a part of the array when specified', function(){
            const array = [3,2,1,6,5,4,9,8,7]
            const quicksort = new sut(array)
            quicksort.quickSort(3,5)
            
            const expected = [3,2,1,4,5,6,9,8,7]
            const quicksorted = quicksort.array
            
            assert.sameOrderedMembers(quicksorted, expected)
        })
    })

    describe('Sort', function(){
        it('Should sort the array correctly', function(){
            const array = [1,5,2,3,8,1,3,2,6,4,2]

            const sorted = array.sort((a,b) => a-b)
            const quicksorted = new sut(array).sort()

            assert.sameOrderedMembers(quicksorted, sorted)

        })
    })

    describe('Behavior', function(){
        it('Should not modify the passing array', function(){
            const array = [1,5,2,3,7,5,1,2,6]
            const arrayClone = array.slice()
            const quicksort = new sut(array)
            quicksort.sort()

            assert.sameOrderedMembers(array,arrayClone)
        })
    })
})