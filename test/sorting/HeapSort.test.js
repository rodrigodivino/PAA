const sut = require('../../dist/sorting/HeapSort').default
const {assert} = require('chai')

describe('HeapSort', function(){
    describe('Constructor', function(){
        it('Should create a heap object identical to argument array', function(){
            const array = [1,3,2,4,6,4,1,2,3]
            const heapsort = new sut(array)

            assert.sameOrderedMembers(heapsort.heap.array, array)
        })
    })

    describe('Sort', function(){
        it('Should sort the heap and return its array', function(){
            const array = [1,3,2,4,6,5,9,8,7]
            const expected = [1,2,3,4,5,6,7,8,9]

            const heapsort = new sut(array)
            const sorted = heapsort.sort();

            assert.sameOrderedMembers(sorted, expected)
        })
    })
})