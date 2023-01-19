// Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

let str = "programming camp are amazing"
let word = "programming"


//method 1
function wrdFunc(str) {
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            arr.splice(i , 1)
        }
        
    }
    return arr.join(" ")
}
console.log(wrdFunc(str))


//method 2
function wordRevFunc(str) {
    let regex = new RegExp(`${word}`, "g")
    let newStr = str.replace(regex, ``)
    return newStr
}

console.log(wordRevFunc(str))