// Find maximum and minimum of an array.
let arr = [1, 2, 3, 4]

function valFunc(arr) {
    let max = 0
    let min = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if ( min > arr[i]) {
            min = arr[i]
        }
        
    }
    console.log(max, min)
}

valFunc(arr)