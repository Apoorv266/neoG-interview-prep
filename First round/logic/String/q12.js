// Write a program that takes two strings and copies smaller string into bigger string

let str1 = "This is string"
let str2 = "This is test string"

function copyFunc(str1, str2) {
    if (str1.length < str2.length) {
        let temp = str1
        str1 = str2 
        str2 = temp
        console.log(str1, str2 )
    }
}

console.log(copyFunc(str1, str2))
