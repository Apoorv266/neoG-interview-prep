// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

let str = "Batman@45"

function lettersNumbersCheck(val) {
    var regEx =  /^[a-zA-Z0-9]+[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (val.match(regEx)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(lettersNumbersCheck(str))