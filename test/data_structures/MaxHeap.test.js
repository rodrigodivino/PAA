const sut = require('../../dist/data_structures/MaxHeap').default;
const {assert} = require('chai')

describe('MaxHeap', function(){
    describe('Peneira', function(){
        it('Should reorganize the heap if element is not greater than his nodes', function(){
            const array = [11,0,9,8,7,6,5,4,3,2,1]
            const maxheap = new sut(array)

            maxheap.peneira(1, array.length-1)

        
            for(let i=0;i<=array.length/2;i++){
                const node = maxheap.array[i]
                const left = maxheap.left(i)
                const right = maxheap.right(i)

                if(maxheap.array[left] < array.length)
                    assert.isAtLeast(node, maxheap.array[left])
                if(maxheap.array[right] < array.length)
                    assert.isAtLeast(node, maxheap.array[right])    
            }
        })
    })
})