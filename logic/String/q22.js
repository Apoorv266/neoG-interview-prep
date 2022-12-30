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

console.log(containsSpecialChars('hello')); // 👉️ false
console.log(containsSpecialChars('hello!')); // 👉️ true

//or

function containsSpecialChars(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split('').some(specialChar => { 
      return str.includes(specialChar)
  });

  return result;
}
