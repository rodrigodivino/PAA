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

    describe('Partition', function(){
        it('Should find the correct location for the pivot')
    })
})