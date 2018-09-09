const sut = require('../../dist/data_structures/MaxHeap').default;
const {assert} = require('chai')

describe('MaxHeap', function(){
    describe('Peneira', function(){
        it('Should reorganize the heap if element is not greater than his nodes', function(){
            const array = [16,4,10,14,7,9,3,2,8,1]
            const maxheap = new sut(array)

            maxheap.peneira(1)

            const expected = [16,14,10,8,7,9,3,2,4,1]
        
            assert.sameOrderedMembers(maxheap.array, expected)
        })
    })

    describe('BuildMaxHeap', function(){
        it('Should reorganize the heap so every parent is bigger than his nodes', function(){
            const array = [3,6,1,2,8,3,2,8,5,1,2,3,2,6,2]
            const maxheap = new sut(array)

            maxheap.buildMaxHeap()

        
            for(let i=0;i<=array.length/2;i++){
                const node = maxheap.array[i]
                const left = maxheap.left(i)
                const right = maxheap.right(i)

                if(maxheap.array[left] < maxheap.length)
                    assert.isAtLeast(node, maxheap.array[left])
                if(maxheap.array[right] < maxheap.length)
                    assert.isAtLeast(node, maxheap.array[right])    
            }
        })
    })
})