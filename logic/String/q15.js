// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

let str = "how are you"
let c1 = "o"
let c2 = "b"

function chngFunc(str) {
    let regex = new RegExp(`${c1}`, "gi");
    return str.replace(regex, c2);
    console.log(regex)
}

console.log(chngFunc(str))

