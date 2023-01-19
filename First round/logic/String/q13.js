// Write a program that masks all but last four characters of the string "5565534276455423" to '#'


let str = "44445"
function replaceFunc(str) {

    let arr = str.split("")
    let len = str.length
    let repLen = len - 4


    for (let i = repLen; i < len; i++) {
        arr.splice(i, 1, "#")
    }
    return arr.join("")
}

console.log(replaceFunc(str))