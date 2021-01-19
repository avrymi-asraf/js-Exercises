let num = 11;
counter = 100;
let sum = 0;
let temp = num;

while (sum != 1 && counter > 0) {
  temp = sum;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit;
    temp = Math.floor(temp / 10);
    console.log(temp, sum);
  }
  counter--;
}
