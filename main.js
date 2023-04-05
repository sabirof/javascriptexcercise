//console.log("Starting Javascript gurl");
//Excercise 1
// var myName = "Sabir";
// console.log("My name is " + "" + myName);

//Exercise 2
//Create a variable called age with a number that is your age. Do not use string quotes for numbers.
//Add a line to print that variable in the console. Save the file and reload the page. You should see your name and your age.
// var myAge = 32;
//console.log(myName + " is " + myAge);

//Excercise 3
//Create a variable called juliaAge with a value 32. Create another variable called ageDiff and set it to an expression that calculates your age minus Julias's age.
//Print the value of ageDiff.Save the file and reload the page.You should see your age and the age difference.If you are younger than Julia, you should see a negative number.
// var juliaAge = 32
//var ageDiff = juliaAge - myAge
//console.log(ageDiff);

//excercise 4
//Write a conditional that compares the variable with your age with the number 21. It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age. Save your JavaScript file and reload the page. Make sure you see the correct message. Try changing your age in the JavaScript file to make sure the other message prints when it should.

//if (myAge > 21) {
//message = "You are older than 21";
//} else {
//message = "You are a kiddo"
//}

//console.log(message);

//Exercise 5
//Write a conditional that compares your age with Julia's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", "Julia is younger than you", or "You have the same age as Julia".
// if (myAge > juliaAge) {
//     message = "Julia is younger than you!"
// } else if (myAge < juliaAge) {
//     message = "Julia is older than you!"
// } else {
//     message = "You are twins!!!"
// }
// console.log(message);

//excercise 6 Arrays
//const humans = ["Alireza", "Martha", "Melissa", "Mila", "Phuoc", "Raul", "Sabir", "Sonja"];
//console.log(humans[0]);
//console.log(humans[7]);
//for (let i = 0; i < 1; i++) {
//console.log(humans);
//}

//Excercise 7 Looping over an Array
// const ages = [21, 22, 23, 24, 25, 26, 27, 28];
// let i = 0;
// let agesLength = ages.length;
// while (i < agesLength) {
//   if (ages[i] % 2 === 0) {
//     console.log(ages[i]);
//   }
//   i++;
// }
// for (let i = 0; i < agesLength; i++) {
//     console.log(ages[i])
//     if (ages[i] % 2 === 0) {
//         console.log("inside if block")
//         console.log(ages[i]);

//     }
// }
//Exercise 8
//Write a function that receives an array as a parameter and prints the lowest number in the array to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console. If not, investigate and fix it.

// function findLowestNumber(arr) {
//   let lowest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < lowest) {
//       lowest = arr[i];
//     }
//   }
//   console.log("lowest number:", lowest);
// }
// findLowestNumber(numbers);
const numbers = [1, 4, 8, 2, 10, 3, 2];
//exercise 9

// function findBiggestNumber(arr) {
//   let biggest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > biggest) {
//       biggest = arr[i];
//     }
//   }
//   console.log("biggest number:", biggest);
// }
// // const numbers = [1, 4, 8, 2, 10, 3, 2];
// findBiggestNumber(numbers);

//Excercise 10
// var array = [
//   3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
//   100,
// ];
// var index = 1;

// function print_array_element(arr, i) {
//   console.log(arr[i]);
// }

// print_array_element(array, index);

// Exercise 11
// Write a function that receives an array and only prints the values that repeat.

// For example, given the following array, the function will print '6,23,33,100'.

// var array = [
//   3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
//   100,
// ];

// Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console. If not, investigate and fix it.

// console.log(array.filter((a, b, c) => c.indexOf(a) !== b));

// function testing(array, array2) {
//   for (let i = 0; i < array.length; i++) {
//     console.log("oulterLoop", array[i]);
//     for (let b = 0; b < array2.length; b++) {
//       console.log("innerLoop", array2[b]);
//     }
//   }
// }
// let nums = [1, 2, 3, 4, 5];
// let letters = ["a", "b", "c", "d", "e"];
// testing(nums, letters);

// function printDuplicates(array) {
//   var duplicates = {};
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (duplicates[array[i]]) {
//       result.push(array[i]);
//     } else {
//       duplicates[array[i]] = true;
//     }
//   }
//   console.log(result.join(","));
// }
//excercise 11
// var array = [
//   3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
//   100,
// ];
// function printDuplicates(array) {
//   var duplicates = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === array[i]) {
//         duplicates.push(array[j]);
//       }
//     }
//   }
//   console.log(duplicates);
// }
// printDuplicates(array);
//Excercise 12//
//Write a simple JavaScript function to join all elements of the following array into a string.

//const myColor = ["Red", "Green", "White", "Black"];

//Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:

//"Red", "Green", "White", "Black"

//If not, investigate and fix it.
// function joinArrayElements(arr) {
//   return arr.join(", ");
// }

// const myColor = ["Red", "Green", "White", "Black"];
// const result = joinArrayElements(myColor);
// console.log(result);

// Exercise 13
// Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423. Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix it.

// function reverse_a_number(n) {
//   console.log("n :>> ", n);
//   n = n + "";
//   console.log("n :>> ", n);
//   var nSplit = n.split("");
//   console.log("nSplit :>> ", nSplit);
//   var reversed = nSplit.reverse();
//   console.log("reversed :>> ", reversed);
//   var joined = reversed.join("");
//   console.log("joined :>> ", joined);
// return n.split("").reverse().join("");
//}
//console.log(Number(reverse_a_number(32243)));
// excercise14;
// let x = "webmaster";
// let sorted = alphabeticalOrder(x);
// function alphabeticalOrder(str) {
//   return str.split("").sort().join("");
// }

// console.log(sorted);
// excercise 15
// Write a JavaScript function that converts the first letter of every word to uppercase.For example, if x = "prince of persia" then the output should be "Prince Of Persia".Save your JavaScript file and reload the page.Make sure you see the correct output.If not, investigate and fix it.

// function capitalizeWords(str) {
//   var words = str.split(" "); //splits string into an array of words
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//   }
//   return words.join(" ");
// }

// var x = "prince of persia";
// var capitalized = capitalizeWords(x);
// console.log(capitalized); // Output: "Prince Of Persia"

//excercise 16;
// function longestWord(string) {
//   var wordarray = string.split(" ");
//   var longest = "";

//   for (let i = 0; i < wordarray.length; i++) {
//     if (wordarray[i].length > longest.length) {
//       longest = wordarray [i];
//     }
//   }
//   return longest;
// }
// const x = "Web Development Tutorial";
// var newx = x.split(" ");
// console.log(newx);
// const longest = longestWord(x);
// console.log(longest);
// longestWord(x);

//Excercise 19

// function printMultiply() {
//   const num1 = 2;
//   const num2 = 3;
//   const result = num1 * num2;
//   console.log(`The result of ${num1} * ${num2} is ${result}`);
// }
// printMultiply();

//Excercise 20
// function printMultiply() {
//   const num1 = 5;
//   const num2 = 7;
//   const result = num1 * num2;
//   return result;
// }
// console.log(printMultiply());

//Excercise 21
// function numMultiply(num1, num2) {
//   return num1 * num2;
// }
// console.log(numMultiply(2, 5));
// console.log(numMultiply(-8, 60));
// console.log(numMultiply(8, 9));

//Excercise 22 (the problem was I had to put the equi before the iso)
// function triangleType(side1, side2, side3) {
//   if (side1 === side2 && side2 === side3) {
//     return "Equilateral triangle";
//   } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     return "Isosceles triangle";
//   } else {
//     return "Scalene triangle";
//   }
// }

// console.log(triangleType(3, 3, 5));
// console.log(triangleType(5, 5, 5));
// console.log(triangleType(4, 5, 7));

//Excercise 23
// function replaceAwith1(charArray) {
//   for (let i = 0; i < charArray.length; i++) {
//     if (charArray[i] === "a")
//if the character is equal to a  {
//       charArray[i] = "1";
//   }
//   return charArray.join(""); //After the loop has finished iterating through all characters in the array, the function returns the modified array as a string. The join method is used to concatenate all elements of the array into a single string, using an empty string as the separator.
// }

// const input = ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
// const output = replaceAwith1(input);
// console.log(output);

//Excercise 24
// function sumArray(arr) {
//   /*
//    * Returns the sum of all elements in the given array.
//    */
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// function findSmallest(arr) {
//   /*
//    * Returns the smallest number in the given array.
//    */
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// // Example usage
// let arr = [5, 3, 8, 2, 9, 1];
// console.log("Sum of array:", sumArray(arr));
// console.log("Smallest number in array:", findSmallest(arr));

//Excercise 25

// function sumEvenNumbers(arr) {
//   /*
    * Adds up all the even numbers in the given array and returns the result.
    */
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// Example usage
// let arr = [1, 2, 8, 3, 2];
// let sumOfEvens = sumEvenNumbers(arr);
// console.log("Sum of even numbers in array:", sumOfEvens);
 

//excercise 26
// function sumEvenPositions(arr) {
//   let sum = 0;
//   for (let i = 1; i < arr.length; i += 2) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const arr = [1, 2, 8, 3, 2, 3, 4];
// const result = sumEvenPositions(arr);
// console.log(result); // Output: 14

//Excercise 27
// function printEvenNumbers(num) {
//   for (let i = 2; i < num; i += 2) {
//     console.log(i);
//   }
// }
// printEvenNumbers(9);


