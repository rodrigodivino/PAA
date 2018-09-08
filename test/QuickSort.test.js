const {assert} = require('chai')
const sut = require('../dist/sorting/QuickSort').default

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

            assert.equal(array[2], 3)
            assert.equal(array[4], 5)
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
})