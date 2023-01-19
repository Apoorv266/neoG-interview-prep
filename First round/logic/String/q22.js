function containsSpecialChars(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split('').some(specialChar => { 
    if (str.includes(specialChar)) {
      return true;
    }


    return false;
  });

  return result;
}



//or

function containsSpecialChars2(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split('').some(specialChar => { 
      return str.includes(specialChar)
  });

  return result;
}

console.log(containsSpecialChars('hello')); // 👉️ false
console.log(containsSpecialChars2('hello!')); // 👉️ true
