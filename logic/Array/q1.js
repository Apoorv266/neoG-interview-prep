// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

let arr = [10,4,5,2,5,6,9]

function sumFunc(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        
    }
    return sum
}

console.log(sumFunc(arr))