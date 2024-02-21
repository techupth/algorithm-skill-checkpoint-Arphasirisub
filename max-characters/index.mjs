// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  let object = {};

  for (let character of str) {
    if (object[character]) {
      object[character] = object[character] + 1;
      console.log(character);
    } else {
      object[character] = 1;
      console.log(character);
    }
  }

  let count = 0;
  let string = "";

  for (let character in object) {
    if (object[character] > count) {
      count = object[character];
      console.log(object[character]);
      console.log(character);
      string = character;
    }
  }
  return string;
};

console.log(getMaxCharacters("abcccccccd"));
// console.log(getMaxCharacters("apple 1231111"))
