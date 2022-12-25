// Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

let str = "neogcamp"


//method 1
function toggleFunc(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
       if (i % 2 !== 0) {
        newStr+=str[i].toUpperCase()
       }else{
        newStr+=str[i]
       }
    }
    return newStr
}

console.log(toggleFunc(str))