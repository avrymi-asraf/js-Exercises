let num = 6;

while (num != 1) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit;
    cons,ole.log(sum);
    temp = Math.floor(temp / 10);
  }
}
