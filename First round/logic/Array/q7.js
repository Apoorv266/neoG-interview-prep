// Shift an array by X to right

let arr = [1,2,3,4,5] 
// [5,1,2,3,4]
let n = 1
console.log(arr)
console.log(arr[4])
function rotateFunc(arr, n) {
    for (let i = 0; i < 1; i++) {
       
        let last = arr[arr.length - 1]
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j-1];  
            
        }
        arr[0] = last; 
    }
console.log(arr)
}

rotateFunc(arr, n)