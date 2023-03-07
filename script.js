// Homework - 1
// const userName = prompt("Enter your name ");

// alert(`Hello ${userName}`);

// Homework - 2

// const firstNumberUser = +prompt("Enter the first number");
// const secondNumberUser = +prompt("Enter the second number");

// const div = firstNumberUser / secondNumberUser;
// const sub = firstNumberUser - secondNumberUser;

// task-1

// if (firstNumberUser / secondNumberUser && secondNumberUser == 0) {
//    alert('Error');
// }
// else {
//    alert(div);
// }

// task-2

// if (firstNumberUser < secondNumberUser) {
//    let message = confirm('Ви впевнені, що хочете продовжити операцію?');
//    if (message == true) {
//       alert(sub);
//    }
//    else if (message == false) {
//       alert('Операція скасована');
//    }
// }

// task-3

// if (firstNumberUser == "" || secondNumberUser == "") {
//    alert('error');
// }

// Homework - 3 

// task -1

const arr = [1, 'srt', 2, 3, 'str2', 6, 7, 'str3', 9, undefined];

// Task - 2 and Task - 4

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//       sum += arr[i];
//    }
// }
// console.log(sum);

// Task - 3

// let min = arr[0];
// let max = min;
// for (let i = 1; i < arr.length; ++i) {
//    if (arr[i] > max) { max = arr[i]; }
//    if (arr[i] < min) { min = arr[i]; }
// }

// console.log(max);
// console.log(min);

// another way to find the max and min value

// const maxVal = Math.max(...arr);
// const minVal = Math.min(...arr);

// console.log(maxVal);
// console.log(minVal);



// let line = 5;
// let str = '';
// let star = '#';

// for(let i = 0; i < line; i++ ){
//    str += star;
//    console.log(str);
// }

// Homework - 24 - function

// Task - 1

// Sum
function calcSum(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Помилка результату';     // можна тут прописати NaN?
   }
   return a + b;
}
const resSum = calcSum('h', 5);
console.log(resSum);

// Subtraction
function calcSubtraction(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Помилка результату';
   }
   return a - b;
}
const resSub = calcSubtraction(6, 5);
console.log(resSub);

// Multiplication
function calcMultiplication(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Помилка результату';
   }
   return a * b;
}
const resMulti = calcMultiplication(6, 5);
console.log(resMulti);

// Division
function calcDivision(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Помилка результату';
   }
   return a / b;
}
const resDiv = calcDivision(6, 2);
console.log(resDiv);

// Task - 2 
// getFindMin
function getFindMin(arr) {
   let min = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      }
   }
   return min;
}

const resFindMin = getFindMin(arr);
console.log(resFindMin);

// пошук min через forEach
let min = arr[0];
arr.forEach(function (elem, index) {
   if (index < 0) {
      if (min > elem) {
         min = elem;
      }
   }
});

console.log(min);

// getFindMax
function getFindMax(arr) {
   let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}
const resFindMax = getFindMax(arr);
console.log(resFindMax);

// пошук max через forEach
let max = arr[0];
arr.forEach(function (elem, index) {
   if (index > 0) {
      if (max < elem) {
         max = elem;
      }
   }
});
console.log(max);

