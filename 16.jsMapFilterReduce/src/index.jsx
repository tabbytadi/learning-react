var numbers = [3, 56, 2, 48, 5];
console.log("Original numbers: " + numbers);


//Map -Create a new array by doing something with each item in an array.
const numbersDoubled = numbers.map(function (x) {
  return x * 2;
});
console.log("Doubled numbers: " + numbersDoubled);



//Filter - Create a new array by keeping the items that return true.
const evenNumbers = numbers.filter(function (x) {
  return x % 2 === 0;
});
console.log("Even numbers: " + evenNumbers);



//Reduce - Accumulate a value by doing something to each item in an array.
const total = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
})
console.log("Sum of numbers: " + total);



//Find - find the first item that matches from an array.
const firstGreaterNumber = numbers.find(function (x) {
  return x > 10;
});
console.log("First number greater than 10: " + firstGreaterNumber);




//FindIndex - find the index of the first item that matches.
const firstGreaterNumberIndex = numbers.findIndex(function (x) {
  return x > 10;
});
console.log("The index of the first number greater than 10: " + firstGreaterNumberIndex);


import emojipedia from "./emojipedia";

console.log("Emojipedia: ", emojipedia);

function filterEmojiByMeaning(meaning) {
  return emojipedia.filter(function (emoji) {
    return emoji.meaning.includes(meaning);
  });
}
console.log("Emojis with 'laughing': ", filterEmojiByMeaning("laughing"));

const reduceMeaningTo100Chars = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log("Combined meanings (first 100 chars): ", reduceMeaningTo100Chars);