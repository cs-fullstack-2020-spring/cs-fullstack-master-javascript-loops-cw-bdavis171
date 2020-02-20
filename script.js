// //Exercise 1:

// //Create a for loop to print -3 to 8
// for (let i = -3; i <= 8; i++) {
//     console.log(i);
// }

// //Exercise A:

// //Create a while loop to print -10 to 5
// let count = -10;
// while (count <= 5) {
//     console.log(count);
//     count++;
// }

// // //Exercise 2:
// //Create a for loop to print -5 to 5 three times in a row
// for (let i = -5; i <= 5; i++) {
//     // !! : this could have been done a simpler with a nested for loop - refer to the CWAnswers gist for an example
//     console.log(i);
//     if (i == 5) {
//         for (let j = -5; j <= 5; j++) {
//             console.log(j);
//             if (j == 5) {
//                 for (let k = -5; k <= 5; k++) {
//                     console.log(k);
//                 }
//             }
//         }
//     }
// }

// // Exercise B:

// //Create a while loop that counts backwards from 10 to 0. Log the current count EXCEPT if it is 5
// let num = 10;

// while (num >= 0) {
//     if (num != 5) {
//         console.log(num);
//     }
//     num--;
// }

// // Exercise 3:

// //Create a for loop to print only even numbers from -50 to 50
// for (i = -50; i <= 50;) {
//     // !! : cool, I didn't know you could not pass in that last param with a for loop and just do it in the loop (while style)
//     console.log(i);
//     i = i + 2;
// }

// //Exercise C:

// //Create an empty array called 'names'
// let names = [];

// //Create a while loop that will ask the user to enter a name and add it to the array, and to press 'q' to quit the loop. Use a for loop to print the words
// let index = 0;
// let userInput;
// while (userInput != 'q') {
//     userInput = prompt("Enter a word. Enter q to quit.");
//     // !! : interesting approach, I would have handled my if condition in the while loop not the  for loop tho bc that q still exists in your loop - also push lets you do this without an iterator
//     names[index] = userInput;
//     index++;
// }
// for (i = 0; i < names.length; i++) {
//     if (names[i] != 'q') {
//         console.log(names[i]);
//     }
// }

// // Exercise 4

// //Create the following array: let high_scores = [2112, 1024, 9000, 9001, 7200, 2600, 10000]
// let high_scores = [2112, 1024, 9000, 9001, 7200, 2600, 10000];

// //Use a for loop to print each score, if the score is greater than 9000, then print the score and the text 'OVER 9000!'
// for (let i = 0; i < high_scores.length; i++) {
//     if (high_scores[i] > 9000) {
//         console.log(`${high_scores[i]} OVER 9000!`);
//     } else {
//         console.log(high_scores[i]);
//     }
// }

// //Exercise 5:
// // !! : nice, keep in mind that parseInt will keep you from making the same mistake that I did in class (comapring by character not by value)
// //Prompt the user to enter a number and store it in a variable
// let num1 = prompt('Enter a number');

// //Prompt the user to enter another number
// let num2 = prompt('Enter another number');

// //Create a for loop that count from the first number to the second
// for (let i = num1; i <= num2; i++) {
//     console.log(i);

// }
