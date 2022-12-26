// Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

let arr = [7,4,6,9,3,8]

function medianFunc(arr) {
    arr.sort((a, b) => a - b)

    if (arr.length % 2 !== 0) {
        let val = arr.indexOf(arr[arr.length - 1])
        console.log(arr[val / 2])
    }

    else{
        let val = arr.indexOf(arr[arr.length - 1])
        let sum = arr[Math.trunc(val /2)] + arr[(Math.trunc(val /2) + 1)]
        console.log(sum/2)
    }
   
}

medianFunc(arr)
