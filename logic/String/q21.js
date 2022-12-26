// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

let str = "Wed April 15, 7pm"

function getDateFunc(str) {
    let newStr = str.split(" ")[3]
    return newStr
}

console.log(getDateFunc(str))