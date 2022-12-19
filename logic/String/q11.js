// For a given input string(str), write a function to print all the possible substrings.Without using substr method

let testStr = 'test'

function extractFunc(str) {
    for (let i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++){

            // if (!arr.includes(str.substr(i, j))) {
            //     arr.push(str.substr(i, j))
            // }
            console.log(str.substring(i, j))
            // console.log(i, j)
        }

    }
}
extractFunc(testStr)

console.log("-------------------------")


