const BasicHeap = require("../../dist/data_structures/BasicHeap").default
const {assert} = require('chai')

class sut extends BasicHeap{
    constructor(array){
        super()
        this.array = array
    }
}

describe('BasicHeap', function(){
    describe('Parent', function(){
        it('Should return the correct parent index', function(){
            const array = [0,1,2,3,4,5,6]
            const heap = new sut(array)

            const index = 5
            const expected = 2
            
        
            assert.equal(heap.parent(index), expected)
        })
    })

    describe('Left', function(){
        it('Should return the correct left node index', function(){
            const array = [0,1,2,3,4,5,6,7,8,9,10]
            const heap = new sut(array)

            const index = 2
            const expected = 5

            assert.equal(heap.left(index), expected)
        })
    })

    describe('Right', function(){
        it('Should return the correct right node index', function(){
            const array = [0,1,2,3,4,5,6,7,8,9,10]
            const heap = new sut(array)

            const index = 2
            const expected = 6

            assert.equal(heap.right(index), expected)
        })
    })
})