let num1 = 76;
let num2 = 87;

let work;
if (num1 > num2) {
  work = num2;
} else {
  work = num1;
}

for (work; work > 0; work--) {
  // console.log(a);
  if (num1 % work === 0 && num2 % work === 0) {
    console.log(work + " is the GCD");
    break;
  }
}
