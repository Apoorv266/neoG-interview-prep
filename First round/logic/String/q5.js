// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

let vowel = ["a", "e", "i", "o", "u"]
let str = "spongebob squarepants"
let newStr = ''

for (let i = 0; i < str.length; i++) {
    let isVowel = false
    for (let k = 0; k < vowel.length; k++) {
        if (str[i] === vowel[k]){
            isVowel = true
        }  
  }
  if (!isVowel) newStr += str[i]
}
console.log(newStr)