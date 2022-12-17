// A program that counts number of vowels and consonants in a String?

let str = "cake taste"



function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  var g = str.match(/[^aeiou]/gi)
  console.log("consonants :" , g.length ,"," ,"vowels :" , m.length  )
}

getVowels(str)


