// JavaScript conditional statement to sort three numbers.

let a = Number(prompt("enter the first number"));
let b = Number(prompt("Enter the seconde number"));
let c = Number(prompt("Enter the three number"));

if (a > b) {
  if (b > c) {
    alert(a + " " + b + " " + c);
  } else if (a > c) {
    alert(a + " " + c + " " + b);
  } else {
    alert(c + " " + a + " " + b);
  }
}

if (a < b) {
  if (a > c) {
    alert(b + " " + a + " " + c);
  } else if (b > c) {
    alert(b + " " + c + " " + a);
  } else {
    alert(c + " " + b + " " + a);
  }
}
