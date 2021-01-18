
for (let i = 100; i < 1000; i++){
    let srtNum = String(i);
    // console.log(srtNum);
    let a = Number(srtNum[0]);
    let b = Number(srtNum[1]);
    let c = Number(srtNum[2]);
    if ((a**3) + (b**3) + (c**3) == i) {
      console.log(i + " is Armstrong number");
    }
};
