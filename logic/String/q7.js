// A program that reads three strings and prints the longest and smallest one

let str1 = "Daud"
let str2 = "Apoorv"
let str3 = "Spongebob"

function checklen(val1, val2, val3) {
if (val1.length > val2.length &&  val1.length > val3.length  ) { 
    console.log(`${val1} is largest string`);
}else if(val2.length > val1.length && val2.length > val3.length ){
    console.log( `${val2} is largest string`);
}else{
    console.log(`${val3} is largest string`);
}

if (val1.length < val2.length && val1.length < val3.length) {
    console.log(`${val1} is smallest string`);
}else if(val2.length < val3.length && val2.length < val1.length){
    console.log(`${val2} is smallest string`);
}
else{
    console.log(`${val3} is smallest string`);
}
}

checklen(str1, str2, str3)