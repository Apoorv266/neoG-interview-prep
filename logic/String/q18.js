// A program that counts the value of each character and prints the most repeated character?

let str = "test"

function charCountFunc(str) {
    let obj = {}
for (let i = 0; i < str.length ; i++) {
    const hasKey = str[i] in obj;
    if (str[i] !== " ") {
        if (!hasKey) {
            obj[str[i]] = 1;
        }
        else{
            obj[str[i]] += 1;
        }
    }
}
let count = 0
let value = ""
for (const val in obj) {
    if (obj[val] > count) {
        count = obj[val]
        value = val
    }
}
console.log(obj)
console.log(value, count)
return value
}

console.log(charCountFunc(str))