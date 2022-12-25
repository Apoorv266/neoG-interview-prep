// A program that counts the value of each character and prints the most repeated character?

let str = "hello"

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
return obj
}

console.log(charCountFunc(str))