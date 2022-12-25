// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

let str = 'hello how are you ?'


// first way
function removeSpace(str) {
    let regex = new RegExp(/\s/, "gi");
    return str.replace(regex, "");
}

console.log(removeSpace(str))

// second way
function removeSpc(str) {
    let arr = str.split(" ").join("")
    return arr
}

console.log(removeSpc(str))


//third way

function removeGap(str) {
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == " ") {
            arr.splice(i , 1)
        } 
    }
   return arr.join("")

}
console.log(removeGap(str))