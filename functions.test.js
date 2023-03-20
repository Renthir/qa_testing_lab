const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions.js')

test('returnTwo should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

describe('Greeting function', () => {

    test('greeting should return a name in da greeting', () => {
        expect(greeting('James')).toEqual('Hello, James.')
    })

    test('greeting should return a name in da greeting', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    })

})

describe('adding function', () => {

    test('1 + 2 = 3', () => {
        expect(add(1, 2)).toEqual(3)
    })

    test('-1 + 3 = 2', () => {
        expect(add(-1, 3)).toEqual(2)
    })

    test('5 + 9 = 14', () => {
        expect(add(5, 9)).toEqual(14)
    })

})

describe('Other math functions', () => {

    test('1 - 2 = -1', () => {
        expect(subtract(1, 2)).toEqual(-1)
    })

    test('1 * 2 = 2', () => {
        expect(multiply(1, 2)).toEqual(2)
    })

    test('1 / 2 = .5', () => {
        expect(divide(1, 2)).toEqual(.5)
    })

})