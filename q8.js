for (let i = 0; i < 100; i++) {
  const num = i;
  let sum = 0;
  let temp = num;
  let history = [];
  while (temp !== 1 && !history.includes(temp)) {
    history.push(sum);
    sum = 0;
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit * digit;
      temp = Math.floor(temp / 10);
    }
    temp = sum;
  }

  if (temp === 1) {
    console.log(num + " is happy number");
  } else {
    // console.log(num + " isn't happy number");
  }
}

function sumqubit(num1) {
  let temp = num1;
  let sum = 0;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 2;
    temp = Math.floor(temp / 10);
  }
  return sum;
}
