// JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor

let a = Number(prompt("enter the first number"));
let b = Number(prompt("Enter the seconde number"));
let c = Number(prompt("Enter the three number"));
let d = Number(prompt("Enter the fourth number"));
let e = Number(prompt("Enter the fifth number"));

let largest1;
let largest2;
let thelargest;

if (a > b) {
  largest1 = a;
} else {
  largest1 = b;
}

if (e > d) {
  largest2 = e;
} else {
  largest2;
}

if (largest1 > largest2) {
  thelargest = largest1;
} else {
  thelargest = largest2;
}

if (thelargest > c) {
  alert("the largest is " + thelargest);
} else {
  alert("the largest is " + c);
}
