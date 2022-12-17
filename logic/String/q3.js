// Program that reads string and count number of characters present in the string

let str = " Hello, world! ";

// First way
console.log(str.trim().length) // only removes white space from front and back of string

//second way
let count = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        count++
    }
}
console.log(count)
