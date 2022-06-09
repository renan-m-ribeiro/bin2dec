window.onload = function () {

    const input = document.querySelector('#inputBinary')
    
    input.addEventListener('keyup', () => {
        const inputValue = getInputValue('#inputBinary').split('')
        const decimalNumber = multiplyArrays(inputValue, createCalcArray(inputValue))
                              .reduce((acc,current) => acc+current)

        showValue('#result', decimalNumber)
    })
    
    const multiplyArrays = (array1 , array2) => {
        let result = []
        for( i = 0; i < array1.length ; i++ ) {
            result.push(array1[i]*array2[i]) 
        }
        return result
    }
    
    const createCalcArray = (element) => {
        let x = 1
        let array = []
        for (let index = 0; index < element.length; index++) {
            array[index] = x
            x = x * 2
        }
        return array.reverse()
    }

    const getInputValue = (element) => {
        let input = document.querySelector(element).value
        return input;
    }

    const showValue = (selector, value) => {
        document.querySelector(selector).innerHTML = value
    }


}